const Problem = require("../../models/Problem");

const User = require("../../models/User");



// CREATE PROBLEM

const createProblem = async(problemData)=>{


    if(!problemData.points){


        if(problemData.difficulty === "Easy"){

            problemData.points = 10;

        }


        else if(problemData.difficulty === "Medium"){

            problemData.points = 20;

        }


        else if(problemData.difficulty === "Hard"){

            problemData.points = 30;

        }


    }



    return await Problem.create(problemData);


};







// GET ALL PROBLEMS WITH SEARCH FILTER PAGINATION

const getAllProblems = async(queryParams={})=>{


    const {

        search,

        difficulty,

        tag,

        page = 1,

        limit = 10


    } = queryParams;





    const filter = {};





    if(search){


        filter.title = {


            $regex:search,


            $options:"i"


        };


    }






    if(difficulty && difficulty !== "All Difficulty"){


        filter.difficulty = difficulty;


    }






    if(tag && tag !== "All Topics"){


    filter.tags = {


        $in:[

            new RegExp(
                tag,
                "i"
            )

        ]


    };


}






    const skip =

        (Number(page)-1)

        *

        Number(limit);








    const problems = await Problem.find(filter)


        .select("-testCases")


        .sort({

            createdAt:-1

        })


        .skip(skip)


        .limit(Number(limit));








    const totalProblems = await Problem.countDocuments(filter);








    return {


        problems,


        currentPage:Number(page),


        totalPages:Math.ceil(

            totalProblems / Number(limit)

        ),


        totalProblems


    };


};







// GET SINGLE PROBLEM

const getProblemById = async(id)=>{


    const problem = await Problem.findById(id);




    if(!problem){


        return null;


    }







    const sampleTestCases = problem.testCases.filter(


        testCase=>!testCase.isHidden


    );








    return {


        _id:problem._id,


        title:problem.title,


        description:problem.description,


        difficulty:problem.difficulty,


        points:problem.points,


        tags:problem.tags,


        sampleTestCases,


        createdAt:problem.createdAt,


        updatedAt:problem.updatedAt


    };


};







// RANDOM PROBLEM

const getRandomProblem = async()=>{


    const count = await Problem.countDocuments();






    if(count === 0){


        return null;


    }







    const randomIndex = Math.floor(

        Math.random()*count

    );








    const problem = await Problem.findOne()


        .skip(randomIndex)


        .select("-testCases");








    return problem;


};







// ADD FAVORITE

const addFavoriteProblem = async(userId,problemId)=>{


    const user = await User.findById(userId);




    if(!user){


        throw new Error(

            "User Not Found"

        );


    }








    if(!user.favoriteProblems.includes(problemId)){


        user.favoriteProblems.push(problemId);


        await user.save();


    }







    return user;


};







// REMOVE FAVORITE

const removeFavoriteProblem = async(userId,problemId)=>{


    const user = await User.findById(userId);




    if(!user){


        throw new Error(

            "User Not Found"

        );


    }







    user.favoriteProblems = user.favoriteProblems.filter(


        id=>id.toString()!==problemId


    );






    await user.save();






    return user;


};







// GET FAVORITES

const getFavoriteProblems = async(userId)=>{


    const user = await User.findById(userId)


        .populate(

            "favoriteProblems",

            "title difficulty tags"

        );







    if(!user){


        throw new Error(

            "User Not Found"

        );


    }







    return user.favoriteProblems;


};







// UPDATE PROBLEM

const updateProblem = async(id,data)=>{


    return await Problem.findByIdAndUpdate(


        id,


        data,


        {

            new:true

        }


    );


};







// DELETE PROBLEM

const deleteProblem = async(id)=>{


    return await Problem.findByIdAndDelete(id);


};







module.exports = {


    createProblem,


    getAllProblems,


    getProblemById,


    getRandomProblem,


    addFavoriteProblem,


    removeFavoriteProblem,


    getFavoriteProblems,


    updateProblem,


    deleteProblem

};