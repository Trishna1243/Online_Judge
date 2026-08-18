const express = require("express");

const router = express.Router();


const protect = require("../middleware/authMiddleware");


const {

    runCodeController,

    submitCodeController

} = require("../controllers/compilerController");




// Run code (no login required)

router.post(

    "/run",

    runCodeController

);




// Submit code (login required)

router.post(

    "/submit",

    protect,

    submitCodeController

);



module.exports = router;