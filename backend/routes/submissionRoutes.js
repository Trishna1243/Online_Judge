const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {

    getMySubmissionsController

} = require("../controllers/submissionController");



router.get(

    "/my",

    protect,

    getMySubmissionsController

);



module.exports = router;