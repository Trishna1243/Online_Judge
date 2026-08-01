const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const { createSubmission } = require("../utils/createSubmission");

async function runC(code, input) {

    const { submissionId, submissionPath } = createSubmission();

    const cFile = path.join(submissionPath, "code.c");
    const exeFile = path.join(submissionPath, "code.exe");
    const inputFile = path.join(submissionPath, "input.txt");

    fs.writeFileSync(cFile, code);
    fs.writeFileSync(inputFile, input || "");

    return new Promise((resolve, reject) => {

        exec(
            `gcc "${cFile}" -o "${exeFile}"`,
            (compileError, stdout, stderr) => {

                if (compileError) {
                    return reject(new Error(stderr));
                }

                const startTime = Date.now();

                exec(
                    `"${exeFile}" < "${inputFile}"`,
                    {
                        timeout: 2000
                    },
                    (runError, runStdout, runStderr) => {

                        const executionTime = Date.now() - startTime;

                        if (runError) {

                            if (runError.killed) {
                                return reject(new Error("Time Limit Exceeded"));
                            }

                            return reject(new Error(runStderr));
                        }

                        resolve({
                            output: runStdout,
                            executionTime,
                            submissionId
                        });

                    }
                );

            }
        );

    });

}

module.exports = {
    runC
};