const express = require("express");

const router = express.Router();


console.log("CONTEST ROUTES LOADED");


const protect = require("../middleware/authMiddleware");



const {

    getContestsController,

    getContestByIdController,

    joinContestController,

    cancelContestRegistrationController,

    getContestArenaController,

    validateContestSubmissionController,

    createContestController,

    updateContestController,

    deleteContestController,

    getContestLeaderboardController


} = require("../controllers/contestController");




// GET ALL CONTESTS

router.get(

    "/",

    protect,

    getContestsController

);




// GET SINGLE CONTEST

router.get(

    "/:id",

    protect,

    getContestByIdController

);




// JOIN CONTEST

router.post(

    "/:id/join",

    protect,

    joinContestController

);




// CANCEL REGISTRATION

router.delete(

    "/:id/cancel",

    protect,

    cancelContestRegistrationController

);




// ENTER CONTEST ARENA

router.get(

    "/:id/arena",

    protect,

    getContestArenaController

);




// VALIDATE CONTEST SUBMISSION

router.post(

    "/:id/validate",

    protect,

    validateContestSubmissionController

);




// CREATE CONTEST

router.post(

    "/",

    protect,

    createContestController

);




// UPDATE CONTEST

router.put(

    "/:id",

    protect,

    updateContestController

);




// DELETE CONTEST

router.delete(

    "/:id",

    protect,

    deleteContestController

);




// CONTEST LEADERBOARD

router.get(

    "/:id/leaderboard",

    protect,

    getContestLeaderboardController

);



module.exports = router;