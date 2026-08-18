const Contest = require("../../models/Contest");
const User = require("../../models/User");



// CREATE CONTEST

const createContest = async(data,userId)=>{

    const contest = await Contest.create({

        ...data,

        createdBy:userId

    });


    return contest;

};




// FORMAT CONTEST RESPONSE

const formatContest = (contest,userId)=>{


    const now = new Date();


    let status;


    if(now < contest.startTime){

        status="Upcoming";

    }

    else if(
        now >= contest.startTime &&
        now <= contest.endTime
    ){

        status="Live";

    }

    else{

        status="Completed";

    }





    let isRegistered=false;



    if(userId){


        isRegistered = contest.participants.some(

            participant=>{


                if(!participant.user){

                    return false;

                }



                let participantId;



                if(participant.user._id){

                    participantId =
                    participant.user._id.toString();

                }

                else{

                    participantId =
                    participant.user.toString();

                }



                return participantId === userId;


            }

        );


    }





    let problems = contest.problems;



    if(status==="Upcoming"){

        problems=[];

    }



    return {

        ...contest.toObject(),

        status,

        isRegistered,

        problems

    };


};







// GET ALL CONTESTS

const getAllContests = async(userId)=>{


    const contests = await Contest.find()

    .populate(
        "problems"
    )

    .populate(
        "participants.user",
        "name email"
    );



    return contests.map(

        contest=>

        formatContest(
            contest,
            userId
        )

    );


};







// GET SINGLE CONTEST

const getContestById = async(id,userId)=>{


    const contest = await Contest.findById(id)

    .populate(
        "problems"
    )

    .populate(
        "participants.user",
        "name email"
    );



    if(!contest){

        return null;

    }



    return formatContest(

        contest,

        userId

    );


};







// JOIN CONTEST

const joinContest = async(contestId,userId)=>{


    const contest = await Contest.findById(

        contestId

    );



    if(!contest){

        throw new Error(
            "Contest Not Found"
        );

    }



    const user = await User.findById(

        userId

    );



    if(!user){

        throw new Error(
            "User Not Found"
        );

    }





    const alreadyJoined = contest.participants.some(

        participant=>

        participant.user.toString() === userId

    );



    if(alreadyJoined){

        throw new Error(
            "Already Joined Contest"
        );

    }



    contest.participants.push({

        user:userId,

        solvedProblems:0,

        penalty:0

    });



    await contest.save();



    return contest;


};








// CANCEL REGISTRATION

const cancelContestRegistration = async(contestId,userId)=>{


    const contest = await Contest.findById(

        contestId

    );



    if(!contest){

        throw new Error(
            "Contest Not Found"
        );

    }



    const index = contest.participants.findIndex(

        participant=>

        participant.user.toString()===userId

    );



    if(index===-1){

        throw new Error(
            "Not registered"
        );

    }



    contest.participants.splice(

        index,

        1

    );



    await contest.save();



    return contest;


};








// CONTEST ARENA

const getContestArena = async(contestId,userId)=>{


    const contest = await Contest.findById(

        contestId

    )

    .populate(
        "problems"
    );



    if(!contest){

        throw new Error(
            "Contest Not Found"
        );

    }



    const participant = contest.participants.find(

        p=>

        p.user.toString()===userId

    );



    if(!participant){

        throw new Error(
            "You are not registered"
        );

    }



    return {

        title:contest.title,

        startTime:contest.startTime,

        endTime:contest.endTime,

        problems:contest.problems

    };


};








// VALIDATE SUBMISSION

const validateContestSubmission = async(contestId,userId)=>{


    const contest = await Contest.findById(

        contestId

    );



    if(!contest){

        throw new Error(
            "Contest Not Found"
        );

    }



    return contest;


};








// UPDATE CONTEST

const updateContest = async(id,data)=>{


    return await Contest.findByIdAndUpdate(

        id,

        data,

        {
            new:true
        }

    );


};







// DELETE CONTEST

const deleteContest = async(id)=>{


    return await Contest.findByIdAndDelete(

        id

    );


};








// LEADERBOARD

const getContestLeaderboard = async(contestId)=>{


    const contest = await Contest.findById(

        contestId

    )

    .populate(

        "participants.user",

        "name email"

    );



    if(!contest){

        throw new Error(
            "Contest Not Found"
        );

    }



    return contest.participants.sort(

        (a,b)=>{


            if(
                a.solvedProblems !== b.solvedProblems
            ){

                return b.solvedProblems -
                a.solvedProblems;

            }



            return a.penalty-b.penalty;


        }

    );


};






module.exports={


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


};