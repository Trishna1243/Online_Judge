const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const { createSubmission } = require("../utils/createSubmission");

async function runPython(code, input) {

    const { submissionId, submissionPath } = createSubmission();

    const pyFile = path.join(submissionPath, "code.py");
    const inputFile = path.join(submissionPath, "input.txt");

    fs.writeFileSync(pyFile, code);
    fs.writeFileSync(inputFile, input || "");

    return new Promise((resolve, reject) => {

        const startTime = Date.now();

        exec(
            `python "${pyFile}" < "${inputFile}"`,
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

    });

}

module.exports = {
    runPython
};