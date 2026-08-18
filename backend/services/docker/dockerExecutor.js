const { exec } = require("child_process");

const DOCKER_CONFIG = require("./dockerConfig");

const {
    buildDockerCommand
} = require("./dockerCommandBuilder");



function executeInDocker({

    image,

    workspacePath,

    compileCommand,

    runCommand,

    timeout = DOCKER_CONFIG.DEFAULT_TIMEOUT

}) {


    return new Promise((resolve,reject)=>{


        const dockerCommand =
            buildDockerCommand({

                image,

                workspacePath,

                compileCommand,

                runCommand

            });




        const startTime = Date.now();




        exec(

            dockerCommand,

            {

                timeout,

                maxBuffer:10 * 1024 * 1024

            },


            (error,stdout,stderr)=>{


                const executionTime =
                    Date.now()-startTime;




                if(error){

                    return reject({

                        success:false,

                        stdout,

                        stderr,

                        executionTime,

                        error

                    });

                }





                resolve({

                    success:true,

                    stdout,

                    stderr,

                    executionTime

                });


            }


        );


    });


}



module.exports = {

    executeInDocker

};