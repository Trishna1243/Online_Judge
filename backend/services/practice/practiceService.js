const Submission = require("../../models/Submission");
const Problem = require("../../models/Problem");


const getPracticeData = async(userId)=>{


    const submissions = await Submission.find({

        user:userId,

        verdict:"Accepted"

    })
    .sort({

        submittedAt:-1

    });



    const solvedProblems = await Submission.distinct(

        "problem",

        {

            user:userId,

            verdict:"Accepted"

        }

    );



    const recommendedProblems = await Problem.find({

        _id:{
            $nin:solvedProblems
        }

    })
    .limit(5);



    const dailyChallenge = recommendedProblems[0] || null;



    return {


        streak: calculateStreak(submissions),


        dailyChallenge,


        recommendedProblems,


        badgeProgress:
        Math.min(
            solvedProblems.length * 10,
            100
        )


    };


};





function calculateStreak(submissions){


    if(!submissions.length)

        return 0;



    let streak = 0;



    let current = new Date();



    let days = new Set();



    submissions.forEach(sub=>{


        const date = new Date(
            sub.submittedAt
        )
        .toISOString()
        .split("T")[0];


        days.add(date);


    });



    while(true){


        const today = current
        .toISOString()
        .split("T")[0];



        if(days.has(today)){


            streak++;

            current.setDate(
                current.getDate()-1
            );


        }
        else{

            break;

        }


    }



    return streak;


}



module.exports={

    getPracticeData

};