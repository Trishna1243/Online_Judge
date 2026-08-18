const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {

    createProblemController,

    getProblemsController,

    getProblemByIdController,

    randomProblemController,

    addFavoriteProblemController,

    removeFavoriteProblemController,

    getFavoriteProblemsController,

    updateProblemController,

    deleteProblemController,

    getPracticeController


} = require("../controllers/problemController");




// CREATE PROBLEM

router.post(

    "/",

    createProblemController

);





// GET ALL PROBLEMS

router.get(

    "/",

    getProblemsController

);





// RANDOM PROBLEM

// MUST BE BEFORE /:id

router.get(

    "/random",

    randomProblemController

);





// PRACTICE ARENA

router.get(

    "/practice",

    protect,

    getPracticeController

);





// GET FAVORITE PROBLEMS

router.get(

    "/favorites",

    protect,

    getFavoriteProblemsController

);





// GET SINGLE PROBLEM

router.get(

    "/:id",

    getProblemByIdController

);





// ADD FAVORITE

router.post(

    "/:id/favorite",

    protect,

    addFavoriteProblemController

);





// REMOVE FAVORITE

router.delete(

    "/:id/favorite",

    protect,

    removeFavoriteProblemController

);





// UPDATE PROBLEM

router.put(

    "/:id",

    updateProblemController

);





// DELETE PROBLEM

router.delete(

    "/:id",

    deleteProblemController

);



module.exports = router;