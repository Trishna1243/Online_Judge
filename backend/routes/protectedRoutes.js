const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", protect, (req, res) => {
    res.status(200).json({
        message: "Protected Route Accessed Successfully",
        user: req.user,
    });
});

module.exports = router;