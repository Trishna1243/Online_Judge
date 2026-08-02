const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {

    createProblemController,

    getProblemsController,

    getProblemByIdController,

    addFavoriteProblemController,

    removeFavoriteProblemController,

    getFavoriteProblemsController,

    updateProblemController,

    deleteProblemController

} = require("../controllers/problemController");

router.post(
    "/",
    createProblemController
);

router.get(
    "/",
    getProblemsController
);

router.get(
    "/favorites",
    protect,
    getFavoriteProblemsController
);

router.get(
    "/:id",
    getProblemByIdController
);

router.post(
    "/:id/favorite",
    protect,
    addFavoriteProblemController
);

router.delete(
    "/:id/favorite",
    protect,
    removeFavoriteProblemController
);

router.put(
    "/:id",
    updateProblemController
);

router.delete(
    "/:id",
    deleteProblemController
);

module.exports = router;