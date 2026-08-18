const CommunityProblem = require("../../models/CommunityProblem");

const CommunityPost = require("../../models/CommunityPost");

const Problem = require("../../models/Problem");




// submit problem

const submitProblem = async(data,userId)=>{


    return await CommunityProblem.create({

        ...data,

        submittedBy:userId

    });


};





// pending problems

const getPendingProblems = async()=>{


    return await CommunityProblem.find({

        status:"Pending"

    })
    .populate(

        "submittedBy",

        "name email"

    );


};






// approve problem

const approveProblem = async(id,adminId)=>{


    const communityProblem = await CommunityProblem.findById(id);



    if(!communityProblem){

        throw new Error(
            "Problem Not Found"
        );

    }



    communityProblem.status="Approved";

    communityProblem.approvedBy=adminId;

    communityProblem.approvedAt=new Date();



    await communityProblem.save();




    await Problem.create({

        title:communityProblem.title,

        description:communityProblem.description,

        difficulty:communityProblem.difficulty,

        tags:communityProblem.tags,

        testCases:communityProblem.testCases

    });



    return communityProblem;


};






// reject problem

const rejectProblem = async(id,adminId)=>{


    const communityProblem =
    await CommunityProblem.findById(id);



    if(!communityProblem){

        throw new Error(
            "Problem Not Found"
        );

    }



    communityProblem.status="Rejected";

    communityProblem.approvedBy=adminId;

    communityProblem.approvedAt=new Date();



    await communityProblem.save();



    return communityProblem;


};







// get one discussion post

const getCommunityPost = async(id)=>{


    return await CommunityPost.findById(id)

    .populate(

        "author",

        "name email"

    );


};





module.exports = {


    submitProblem,

    getPendingProblems,

    approveProblem,

    rejectProblem,

    getCommunityPost


};