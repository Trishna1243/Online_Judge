const {

    createContest,

    getAllContests,

    getContestById,

    joinContest,

    cancelContestRegistration,

    getContestArena,

    validateContestSubmission,

    updateContest,

    deleteContest,

    getContestLeaderboard


} = require("../services/contest/contestService");





// CREATE CONTEST

const createContestController = async(req,res)=>{

try{


console.log("USER:",req.user);

console.log("BODY:",req.body);



const contest = await createContest(

    req.body,

    req.user.id

);



res.status(201).json({

    success:true,

    contest

});


}

catch(error){

console.log(error);

res.status(500).json({

success:false,

message:error.message

});

}


};








// GET ALL CONTESTS

const getContestsController = async(req,res)=>{


try{


    const contests = await getAllContests(

        req.user.id

    );



    res.status(200).json({


        success:true,


        contests


    });



}


catch(error){


    res.status(500).json({


        success:false,


        message:error.message


    });


}



};








// GET SINGLE CONTEST

const getContestByIdController = async(req,res)=>{


try{


    const contest = await getContestById(

        req.params.id,

        req.user.id

    );



    if(!contest){


        return res.status(404).json({


            success:false,

            message:"Contest Not Found"


        });


    }




    res.status(200).json({


        success:true,

        contest


    });



}


catch(error){


    res.status(500).json({


        success:false,

        message:error.message


    });


}



};








// JOIN CONTEST

const joinContestController = async(req,res)=>{


try{


    const contest = await joinContest(

        req.params.id,

        req.user.id

    );



    res.status(200).json({


        success:true,


        message:"Contest Joined Successfully",


        contest


    });



}


catch(error){


    res.status(400).json({


        success:false,

        message:error.message


    });


}



};








// CANCEL REGISTRATION

const cancelContestRegistrationController = async(req,res)=>{


try{


    const contest = await cancelContestRegistration(

        req.params.id,

        req.user.id

    );



    res.status(200).json({


        success:true,


        message:"Contest Registration Cancelled",


        contest


    });



}


catch(error){


    res.status(400).json({


        success:false,


        message:error.message


    });


}



};








// CONTEST ARENA

const getContestArenaController = async(req,res)=>{


try{


    const arena = await getContestArena(

        req.params.id,

        req.user.id

    );



    res.status(200).json({


        success:true,


        arena


    });



}


catch(error){


    res.status(400).json({


        success:false,


        message:error.message


    });


}



};








// VALIDATE SUBMISSION

const validateContestSubmissionController = async(req,res)=>{


try{


    const contest = await validateContestSubmission(

        req.params.id,

        req.user.id

    );



    res.status(200).json({


        success:true,


        contestId:contest._id


    });



}


catch(error){


    res.status(400).json({


        success:false,


        message:error.message


    });


}



};








// UPDATE CONTEST

const updateContestController = async(req,res)=>{


try{


    const contest = await updateContest(

        req.params.id,

        req.body

    );



    res.status(200).json({


        success:true,


        contest


    });



}


catch(error){


    res.status(500).json({


        success:false,


        message:error.message


    });


}



};








// DELETE CONTEST

const deleteContestController = async(req,res)=>{


try{


    await deleteContest(

        req.params.id

    );



    res.status(200).json({


        success:true,


        message:"Contest Deleted Successfully"


    });



}


catch(error){


    res.status(500).json({


        success:false,


        message:error.message


    });


}



};








// LEADERBOARD

const getContestLeaderboardController = async(req,res)=>{


try{


    const leaderboard = await getContestLeaderboard(

        req.params.id

    );



    res.status(200).json({


        success:true,


        leaderboard


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


createContestController,


getContestsController,


getContestByIdController,


joinContestController,


cancelContestRegistrationController,


getContestArenaController,


validateContestSubmissionController,


updateContestController,


deleteContestController,


getContestLeaderboardController


};