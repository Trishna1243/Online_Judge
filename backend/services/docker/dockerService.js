const {
    createWorkspace,
    writeWorkspaceFiles,
    removeWorkspace
} = require("./workspaceManager");


const {
    executeInDocker
} = require("./dockerExecutor");





async function runDocker({

    image,

    sourceFileName,

    code,

    input,

    compileCommand,

    runCommand,

    timeout

}) {


    const {

        workspaceId,

        workspacePath

    } = createWorkspace();





    try {



        writeWorkspaceFiles({


            workspacePath,


            sourceFileName,


            code,


            input


        });








        const result = await executeInDocker({


            image,


            workspacePath,


            compileCommand,


            runCommand,


            timeout



        });









        return {


            submissionId: workspaceId,


            output: result.stdout || "",


            stderr: result.stderr || "",


            executionTime: result.executionTime || 0,


            memory: result.memory || 0


        };



    }



    catch(error){



        throw {


            submissionId: workspaceId,


            stdout: error.stdout || "",


            stderr: error.stderr || "",


            executionTime: error.executionTime || 0,


            memory: error.memory || 0,


            error: error.error || error



        };



    }



    finally {



        removeWorkspace(workspacePath);



    }



}





module.exports = {


    runDocker


};