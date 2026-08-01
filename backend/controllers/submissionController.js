const Submission = require("../models/Submission");
const { judgeSubmission } = require("../services/judge/judgeService");

const submitSolution = async (req, res) => {

    try {

        const {
            problemId,
            language,
            code
        } = req.body;

        const result = await judgeSubmission(
            problemId,
            language,
            code
        );

        const submission = await Submission.create({

            user: req.user.id,

            problem: problemId,

            language,

            code,

            verdict: result.verdict,

            executionTime: result.executionTime

        });

        res.status(201).json({

            success: true,
            submission

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

const getMySubmissions = async (req, res) => {

    try {

        const submissions = await Submission.find({

            user: req.user.id

        })
        .populate("problem", "title difficulty")
        .sort({
            submittedAt: -1
        });

        res.status(200).json({

            success: true,
            count: submissions.length,
            submissions

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    submitSolution,
    getMySubmissions

};