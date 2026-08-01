const express = require("express");

const {
    createProblem,
    getAllProblems,
    getProblemById,
    updateProblem,
    deleteProblem,
} = require("../controllers/problemController");

const router = express.Router();

router.post("/", createProblem);

router.get("/", getAllProblems);

router.get("/:id", getProblemById);

router.put("/:id", updateProblem);

router.delete("/:id", deleteProblem);

module.exports = router;