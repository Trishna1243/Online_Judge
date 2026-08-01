const fs = require("fs");
const path = require("path");

const { createSubmission } = require("../../utils/createSubmission");
const { cleanupSubmission } = require("../../utils/cleanupSubmission");
const { runDocker } = require("../docker/dockerService");

async function runCpp(code, input) {

    const { submissionId, submissionPath } = createSubmission();

    const cppFile = path.join(submissionPath, "code.cpp");
    const inputFile = path.join(submissionPath, "input.txt");

    fs.writeFileSync(cppFile, code);
    fs.writeFileSync(inputFile, input || "");

    const startTime = Date.now();

    try {

        const result = await runDocker({

            image: "online_judge_cpp",

            submissionPath,

            compileCommand: "g++ code.cpp -o code",

            runCommand: "./code < input.txt",

            timeout: 5000

        });

        cleanupSubmission(submissionPath);

        return {

            output: result.stdout,
            executionTime: Date.now() - startTime,
            submissionId

        };

    } catch (err) {

        cleanupSubmission(submissionPath);

        const stderr = err.stderr || "";

        if (stderr.includes("error:")) {
            throw new Error("Compilation Error");
        }

        if (err.error && err.error.killed) {
            throw new Error("Time Limit Exceeded");
        }

        throw new Error("Runtime Error");

    }

}

module.exports = {
    runCpp
};