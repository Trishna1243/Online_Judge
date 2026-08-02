const {

    submitProblem,

    getPendingProblems,

    approveProblem,

    rejectProblem

} = require("../services/community/communityService");

const submitCommunityProblem = async (req, res) => {

    try {

        const problem = await submitProblem(

            req.body,

            req.user.id

        );

        res.status(201).json({

            success: true,

            problem

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const pendingProblems = async (req, res) => {

    try {

        const problems = await getPendingProblems();

        res.status(200).json({

            success: true,

            problems

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const approveCommunityProblem = async (req, res) => {

    try {

        const problem = await approveProblem(

            req.params.id,

            req.user.id

        );

        res.status(200).json({

            success: true,

            problem

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const rejectCommunityProblem = async (req, res) => {

    try {

        const problem = await rejectProblem(

            req.params.id,

            req.user.id

        );

        res.status(200).json({

            success: true,

            problem

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

    submitCommunityProblem,

    pendingProblems,

    approveCommunityProblem,

    rejectCommunityProblem

};