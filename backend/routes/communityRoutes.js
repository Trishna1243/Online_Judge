const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {

    getPostsController,

    getPostByIdController,

    createPostController,

    getCommentsController,

    addCommentController,

    votePostController

} = require("../controllers/communityController");




// get all posts
router.get(
    "/",
    getPostsController
);




// get single post
router.get(
    "/:id",
    getPostByIdController
);




// get comments of post
router.get(
    "/:id/comments",
    getCommentsController
);




// add comment
router.post(
    "/:id/comments",
    protect,
    addCommentController
);




// create post
router.post(
    "/",
    protect,
    createPostController
);




// vote post
router.post(
    "/:id/vote",
    protect,
    votePostController
);



module.exports = router;