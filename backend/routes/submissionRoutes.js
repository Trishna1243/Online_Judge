const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

    submitSolution,
    getMySubmissions

} = require("../controllers/submissionController");

router.post(
    "/submit",
    protect,
    submitSolution
);

router.get(
    "/my-submissions",
    protect,
    getMySubmissions
);

module.exports = router;