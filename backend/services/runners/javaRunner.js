const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const { createSubmission } = require("../utils/createSubmission");

async function runJava(code, input) {

    const { submissionId, submissionPath } = createSubmission();

    const javaFile = path.join(submissionPath, "Main.java");
    const inputFile = path.join(submissionPath, "input.txt");

    fs.writeFileSync(javaFile, code);
    fs.writeFileSync(inputFile, input || "");

    return new Promise((resolve, reject) => {

        exec(
            `javac "${javaFile}"`,
            (compileError, stdout, stderr) => {

                if (compileError) {
                    return reject(new Error(stderr));
                }

                const startTime = Date.now();

                exec(
                    `java -cp "${submissionPath}" Main < "${inputFile}"`,
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
    runJava
};