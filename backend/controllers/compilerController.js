const { executeCode } = require("../services/compiler/compilerService");

const runCode = async (req, res) => {

    try {

        const { language, code, input } = req.body;

        const result = await executeCode(language, code, input);

        res.status(200).json({
            success: true,
            verdict: "Accepted",
            output: result.output,
            executionTime: result.executionTime + " ms",
            submissionId: result.submissionId
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            verdict: "Rejected",
            error: error.message
        });

    }

};

module.exports = {
    runCode
};