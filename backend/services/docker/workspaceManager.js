const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DOCKER_CONFIG = require("./dockerConfig");

function ensureTempDirectory() {

    if (!fs.existsSync(DOCKER_CONFIG.TEMP_DIRECTORY)) {

        fs.mkdirSync(
            DOCKER_CONFIG.TEMP_DIRECTORY,
            {
                recursive: true
            }
        );

    }

}

function createWorkspace() {

    ensureTempDirectory();

    const workspaceId = crypto.randomUUID();

    const workspacePath = path.join(
        DOCKER_CONFIG.TEMP_DIRECTORY,
        workspaceId
    );

    fs.mkdirSync(
        workspacePath,
        {
            recursive: true
        }
    );

    return {

        workspaceId,
        workspacePath

    };

}

function writeWorkspaceFiles({

    workspacePath,
    sourceFileName,
    code,
    input

}) {


    const sourceFilePath = path.join(
        workspacePath,
        sourceFileName
    );


    const inputFilePath = path.join(
        workspacePath,
        "input.txt"
    );



    fs.writeFileSync(
        sourceFilePath,
        code,
        "utf8"
    );



    fs.writeFileSync(
        inputFilePath,
        input || "",
        "utf8"
    );



    console.log("========== WORKSPACE FILE CHECK ==========");

    console.log(
        "CODE FILE:"
    );

    console.log(
        fs.readFileSync(sourceFilePath,"utf8")
    );


    console.log(
        "INPUT FILE:"
    );

    console.log(
        fs.readFileSync(inputFilePath,"utf8")
    );


    console.log("==========================================");

}

function removeWorkspace(workspacePath) {

    console.log("================================");
    console.log("Removing Workspace");
    console.log("Path:", workspacePath);
    console.log("Exists:", fs.existsSync(workspacePath));
    console.log("================================");

    try {

        if (
            workspacePath &&
            fs.existsSync(workspacePath)
        ) {

            fs.rmSync(
                workspacePath,
                {
                    recursive: true,
                    force: true
                }
            );

            console.log("Workspace Deleted Successfully");

        }
        else {

            console.log("Workspace Not Found");

        }

    }
    catch (error) {

        console.error("Workspace Cleanup Failed");
        console.error(error);

    }

}

module.exports = {

    createWorkspace,
    writeWorkspaceFiles,
    removeWorkspace

};