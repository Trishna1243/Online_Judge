const path = require("path");

const DOCKER_CONFIG = require("./dockerConfig");


function normalizeWorkspacePath(workspacePath){

    return path
        .resolve(workspacePath)
        .replace(/\\/g,"/");

}


function escapeCommand(command){

    return command.replace(/"/g,'\\"');

}



function buildDockerCommand({

    image,

    workspacePath,

    compileCommand,

    runCommand

}){


    const hostWorkspace =
        normalizeWorkspacePath(workspacePath);



    const dockerArguments = [];



    if(DOCKER_CONFIG.AUTO_REMOVE_CONTAINER){

        dockerArguments.push("--rm");

    }



    if(DOCKER_CONFIG.DISABLE_NETWORK){

        dockerArguments.push(
            "--network",
            "none"
        );

    }



    dockerArguments.push(
        "--memory",
        DOCKER_CONFIG.MEMORY_LIMIT
    );



    dockerArguments.push(
        "--cpus",
        DOCKER_CONFIG.CPU_LIMIT
    );



    dockerArguments.push(
        "--pids-limit",
        "64"
    );



    dockerArguments.push(
        "--cap-drop",
        "ALL"
    );



    dockerArguments.push(
        "--security-opt",
        "no-new-privileges"
    );



    if(DOCKER_CONFIG.READ_ONLY_ROOT_FILESYSTEM){

        dockerArguments.push("--read-only");


        dockerArguments.push(
            "--tmpfs",
            "/tmp:rw,noexec,nosuid,size=64m"
        );

    }




    dockerArguments.push(
        "-v",
        `"${hostWorkspace}:${DOCKER_CONFIG.WORKSPACE_CONTAINER_PATH}"`
    );



    dockerArguments.push(
        "-w",
        DOCKER_CONFIG.WORKSPACE_CONTAINER_PATH
    );



    dockerArguments.push(image);



    const command =
        `${compileCommand} && ${runCommand}`;



    dockerArguments.push(
        "bash",
        "-c",
        `"${escapeCommand(command)}"`
    );



    return `docker run ${dockerArguments.join(" ")}`;

}



module.exports = {

    buildDockerCommand

};