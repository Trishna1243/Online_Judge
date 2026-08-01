const Problem = require("../models/Problem");

// Create Problem
const createProblem = async (req, res) => {

    try {

        const {
            title,
            description,
            difficulty,
            tags,
            testCases
        } = req.body;

        const newProblem = await Problem.create({
            title,
            description,
            difficulty,
            tags,
            testCases
        });

        res.status(201).json({
            success: true,
            message: "Problem Created Successfully",
            problem: newProblem
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Problems
const getAllProblems = async (req, res) => {

    try {

        const problems = await Problem.find();

        res.status(200).json({
            success: true,
            problems
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Problem By ID
const getProblemById = async (req, res) => {

    try {

        const problem = await Problem.findById(req.params.id);

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

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Problem
const updateProblem = async (req, res) => {

    try {

        const updatedProblem = await Problem.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        if (!updatedProblem) {

            return res.status(404).json({
                success: false,
                message: "Problem Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Problem Updated Successfully",
            problem: updatedProblem
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Problem
const deleteProblem = async (req, res) => {

    try {

        const deletedProblem = await Problem.findByIdAndDelete(req.params.id);

        if (!deletedProblem) {

            return res.status(404).json({
                success: false,
                message: "Problem Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Problem Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createProblem,
    getAllProblems,
    getProblemById,
    updateProblem,
    deleteProblem
};