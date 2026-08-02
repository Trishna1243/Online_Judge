const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

    profile,

    badgeProgress

} = require("../controllers/profileController");

router.get(

    "/",

    protect,

    profile

);

router.get(

    "/badges",

    protect,

    badgeProgress

);

module.exports = router;