const Problem = require("../../models/Problem");
const { executeCode } = require("../compiler/compilerService");

async function judgeSubmission(problemId, language, code) {

    const problem = await Problem.findById(problemId);

    if (!problem) {
        throw new Error("Problem Not Found");
    }

    let totalExecutionTime = 0;

    try {

        for (const testCase of problem.testCases) {

            const result = await executeCode(
                language,
                code,
                testCase.input
            );

            totalExecutionTime += result.executionTime;

            const expected = testCase.output.trim();
            const actual = result.output.trim();

            if (expected !== actual) {

                return {
                    verdict: "Wrong Answer",
                    executionTime: totalExecutionTime
                };

            }

        }

        return {
            verdict: "Accepted",
            executionTime: totalExecutionTime
        };

    }

    catch (error) {

        if (error.message.includes("Compilation Error")) {

            return {
                verdict: "Compilation Error",
                executionTime: totalExecutionTime
            };

        }

        if (error.message.includes("Runtime Error")) {

            return {
                verdict: "Runtime Error",
                executionTime: totalExecutionTime
            };

        }

        if (error.message.includes("Time Limit Exceeded")) {

            return {
                verdict: "Time Limit Exceeded",
                executionTime: totalExecutionTime
            };

        }

        throw error;

    }

}

module.exports = {
    judgeSubmission
};