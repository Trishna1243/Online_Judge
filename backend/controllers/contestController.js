const {

    createContest,
    getAllContests,
    getContestById,
    joinContest,
    validateContestSubmission,
    updateContest,
    deleteContest

} = require("../services/contest/contestService");

const createContestController = async (req, res) => {

    try {

        const contest = await createContest(req.body);

        res.status(201).json({

            success: true,

            contest

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const getContestsController = async (req, res) => {

    try {

        const contests = await getAllContests();

        res.status(200).json({

            success: true,

            contests

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const getContestByIdController = async (req, res) => {

    try {

        const contest = await getContestById(req.params.id);

        if (!contest) {

            return res.status(404).json({

                success: false,

                message: "Contest Not Found"

            });

        }

        res.status(200).json({

            success: true,

            contest

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const joinContestController = async (req, res) => {

    try {

        const contest = await joinContest(

            req.params.id,

            req.user.id

        );

        res.status(200).json({

            success: true,

            message: "Contest Joined Successfully",

            contest

        });

    }

    catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

const validateContestSubmissionController = async (req, res) => {

    try {

        const contest = await validateContestSubmission(

            req.params.id,

            req.user.id

        );

        res.status(200).json({

            success: true,

            message: "Contest Submission Allowed",

            contestId: contest._id

        });

    }

    catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

const updateContestController = async (req, res) => {

    try {

        const contest = await updateContest(

            req.params.id,

            req.body

        );

        if (!contest) {

            return res.status(404).json({

                success: false,

                message: "Contest Not Found"

            });

        }

        res.status(200).json({

            success: true,

            contest

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const deleteContestController = async (req, res) => {

    try {

        const contest = await deleteContest(req.params.id);

        if (!contest) {

            return res.status(404).json({

                success: false,

                message: "Contest Not Found"

            });

        }

        res.status(200).json({

            success: true,

            message: "Contest Deleted Successfully"

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

    createContestController,

    getContestsController,

    getContestByIdController,

    joinContestController,

    validateContestSubmissionController,

    updateContestController,

    deleteContestController

};