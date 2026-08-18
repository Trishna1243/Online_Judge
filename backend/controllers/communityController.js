const CommunityPost = require("../models/CommunityPost");
const CommunityComment = require("../models/CommunityComment");

const {
    submitProblem,
    getPendingProblems,
    approveProblem,
    rejectProblem
} = require("../services/community/communityService");




// get all posts
const getPostsController = async(req,res)=>{

    try{

        const posts = await CommunityPost.find()
        .populate(
            "author",
            "name"
        )
        .sort({
            createdAt:-1
        });


        res.json({

            success:true,

            posts

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};






// get single post
const getPostByIdController = async(req,res)=>{

    try{

        const post = await CommunityPost.findById(
            req.params.id
        )
        .populate(
            "author",
            "name"
        );


        if(!post){

            return res.status(404).json({

                success:false,

                message:"Post Not Found"

            });

        }


        res.json({

            success:true,

            post

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};







// create post
const createPostController = async(req,res)=>{

    try{

        const post = await CommunityPost.create({

            title:req.body.title,

            content:req.body.content,

            tag:req.body.tag,

            author:req.user.id

        });


        res.status(201).json({

            success:true,

            post

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};








// get comments
const getCommentsController = async(req,res)=>{

    try{

        const comments = await CommunityComment.find({

            post:req.params.id

        })
        .populate(
            "user",
            "name"
        )
        .sort({
            createdAt:-1
        });


        res.json({

            success:true,

            comments

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};








// add comment
const addCommentController = async(req,res)=>{

    try{

        const comment = await CommunityComment.create({

            post:req.params.id,

            user:req.user.id,

            content:req.body.content

        });


        const populatedComment =
        await comment.populate(
            "user",
            "name"
        );


        res.status(201).json({

            success:true,

            comment:populatedComment

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};









// vote post (temporary)
const votePostController = async(req,res)=>{

    try{

        const post = await CommunityPost.findByIdAndUpdate(

            req.params.id,

            {
                $inc:{
                    votes:1
                }
            },

            {
                new:true
            }

        );


        res.json({

            success:true,

            post

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};








// submit community problem
const submitCommunityProblem = async(req,res)=>{

    try{

        const problem = await submitProblem(
            req.body,
            req.user.id
        );


        res.status(201).json({

            success:true,

            problem

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};








const pendingProblems = async(req,res)=>{

    try{

        const problems = await getPendingProblems();


        res.json({

            success:true,

            problems

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};







const approveCommunityProblem = async(req,res)=>{

    try{

        const problem = await approveProblem(
            req.params.id,
            req.user.id
        );


        res.json({

            success:true,

            problem

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};







const rejectCommunityProblem = async(req,res)=>{

    try{

        const problem = await rejectProblem(
            req.params.id,
            req.user.id
        );


        res.json({

            success:true,

            problem

        });


    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};






module.exports={


    getPostsController,

    getPostByIdController,

    createPostController,

    getCommentsController,

    addCommentController,

    votePostController,


    submitCommunityProblem,

    pendingProblems,

    approveCommunityProblem,

    rejectCommunityProblem

};