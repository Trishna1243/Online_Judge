const Problem = require("../models/Problem");

const {

    generateHint,

    reviewCode

} = require("../services/ai/aiService");

const hint = async (req, res) => {

    try {

        const problem = await Problem.findById(

            req.params.problemId

        );

        if (!problem) {

            return res.status(404).json({

                success: false,

                message: "Problem Not Found"

            });

        }

        const result = await generateHint(

            problem,

            req.body.code || ""

        );

        res.json({

            success: true,

            ...result

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const review = async (req, res) => {

    try {

        const problem = await Problem.findById(

            req.body.problemId

        );

        if (!problem) {

            return res.status(404).json({

                success: false,

                message: "Problem Not Found"

            });

        }

        const result = await reviewCode(

            problem,

            req.body.code

        );

        res.json({

            success: true,

            ...result

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    hint,

    review

};