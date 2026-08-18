const {

    createProblem,

    getAllProblems,

    getProblemById,

    getRandomProblem,

    addFavoriteProblem,

    removeFavoriteProblem,

    getFavoriteProblems,

    updateProblem,

    deleteProblem


} = require("../services/problem/problemService");




// CREATE PROBLEM

const createProblemController = async(req,res)=>{

    try{

        const problem = await createProblem(
            req.body
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





// PRACTICE ARENA

const getPracticeController = async(req,res)=>{

    try{

        const Problem = require("../models/Problem");
        const User = require("../models/User");


        let user = null;


        if(req.user){

            user = await User.findById(
                req.user._id || req.user.id
            );

        }



        const recommendedProblems = await Problem.aggregate([

            {
                $sample:{
                    size:3
                }
            },

            {
                $project:{
                    testCases:0
                }
            }

        ]);



        const dailyChallenge =
            recommendedProblems.length > 0
            ?
            recommendedProblems[0]
            :
            null;



        res.status(200).json({

            success:true,

            streak:user?.streak || 0,

            dailyChallenge,

            recommendedProblems

        });



    }

    catch(error){

        console.log(
            "PRACTICE ERROR:",
            error
        );


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};






// GET ALL PROBLEMS

const getProblemsController = async(req,res)=>{

    try{


        const result = await getAllProblems(
            req.query
        );


        res.status(200).json({

            success:true,

            ...result

        });



    }

    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};






// GET SINGLE PROBLEM

const getProblemByIdController = async(req,res)=>{

    try{


        const problem = await getProblemById(
            req.params.id
        );



        if(!problem){

            return res.status(404).json({

                success:false,

                message:"Problem Not Found"

            });

        }



        res.status(200).json({

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






// RANDOM PROBLEM

const randomProblemController = async(req,res)=>{

    try{


        const problem = await getRandomProblem();



        if(!problem){

            return res.status(404).json({

                success:false,

                message:"No Problems Available"

            });

        }



        res.status(200).json({

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






// ADD FAVORITE

const addFavoriteProblemController = async(req,res)=>{

    try{


        await addFavoriteProblem(

            req.user.id,

            req.params.id

        );


        res.status(200).json({

            success:true,

            message:"Problem Added To Favorites"

        });



    }

    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};






// REMOVE FAVORITE

const removeFavoriteProblemController = async(req,res)=>{

    try{


        await removeFavoriteProblem(

            req.user.id,

            req.params.id

        );



        res.status(200).json({

            success:true,

            message:"Problem Removed From Favorites"

        });



    }

    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};







// GET FAVORITES

const getFavoriteProblemsController = async(req,res)=>{

    try{


        const problems = await getFavoriteProblems(

            req.user.id

        );



        res.status(200).json({

            success:true,

            favoriteProblems:problems

        });



    }

    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};








// UPDATE PROBLEM

const updateProblemController = async(req,res)=>{

    try{


        const problem = await updateProblem(

            req.params.id,

            req.body

        );



        if(!problem){

            return res.status(404).json({

                success:false,

                message:"Problem Not Found"

            });

        }



        res.status(200).json({

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








// DELETE PROBLEM

const deleteProblemController = async(req,res)=>{

    try{


        const problem = await deleteProblem(

            req.params.id

        );



        if(!problem){

            return res.status(404).json({

                success:false,

                message:"Problem Not Found"

            });

        }



        res.status(200).json({

            success:true,

            message:"Problem Deleted Successfully"

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


};