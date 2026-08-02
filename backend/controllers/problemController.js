const {

    createProblem,
    getAllProblems,
    getProblemById,
    addFavoriteProblem,
    removeFavoriteProblem,
    getFavoriteProblems,
    updateProblem,
    deleteProblem

} = require("../services/problem/problemService");

const createProblemController = async (req, res) => {

    try {

        const problem = await createProblem(req.body);

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

const getProblemsController = async (req, res) => {

    try {

        const result = await getAllProblems(req.query);

        res.status(200).json({

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

const getProblemByIdController = async (req, res) => {

    try {

        const problem = await getProblemById(req.params.id);

        if (!problem) {

            return res.status(404).json({

                success: false,

                message: "Problem Not Found"

            });

        }

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

const addFavoriteProblemController = async (req, res) => {

    try {

        await addFavoriteProblem(

            req.user.id,

            req.params.id

        );

        res.status(200).json({

            success: true,

            message: "Problem Added To Favorites"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const removeFavoriteProblemController = async (req, res) => {

    try {

        await removeFavoriteProblem(

            req.user.id,

            req.params.id

        );

        res.status(200).json({

            success: true,

            message: "Problem Removed From Favorites"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const getFavoriteProblemsController = async (req, res) => {

    try {

        const problems = await getFavoriteProblems(

            req.user.id

        );

        res.status(200).json({

            success: true,

            favoriteProblems: problems

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const updateProblemController = async (req, res) => {

    try {

        const problem = await updateProblem(

            req.params.id,

            req.body

        );

        if (!problem) {

            return res.status(404).json({

                success: false,

                message: "Problem Not Found"

            });

        }

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

const deleteProblemController = async (req, res) => {

    try {

        const problem = await deleteProblem(

            req.params.id

        );

        if (!problem) {

            return res.status(404).json({

                success: false,

                message: "Problem Not Found"

            });

        }

        res.status(200).json({

            success: true,

            message: "Problem Deleted Successfully"

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

    createProblemController,

    getProblemsController,

    getProblemByIdController,

    addFavoriteProblemController,

    removeFavoriteProblemController,

    getFavoriteProblemsController,

    updateProblemController,

    deleteProblemController

};