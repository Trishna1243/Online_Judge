const Contest = require("../../models/Contest");



const updateContestProgress = async({

    userId,

    problemId

})=>{


    console.log(
        "🔥 CONTEST PROGRESS UPDATE RUNNING",
        userId,
        problemId
    );




    const contests = await Contest.find({

        problems:problemId

    });






    for(const contest of contests){



        const participant = contest.participants.find(

            p =>

            p.user.toString() === userId.toString()

        );





        if(!participant){

            continue;

        }








        if(!participant.solvedProblemIds){

            participant.solvedProblemIds = [];

        }








        const alreadySolved = participant.solvedProblemIds.some(

            solvedId =>

            solvedId.toString() === problemId.toString()

        );







        if(alreadySolved){

            console.log(

                "Already solved, no update"

            );

            continue;

        }








        // Add solved problem

        participant.solvedProblemIds.push(

            problemId

        );





        participant.solvedProblems =

            participant.solvedProblemIds.length;







        // Calculate penalty

        const currentTime = new Date();



        const contestStart = new Date(

            contest.startTime

        );




        const minutesTaken = Math.floor(

            (

                currentTime - contestStart

            )

            /

            (1000 * 60)

        );







        participant.penalty += minutesTaken;







        await contest.save();







        console.log(

            "Contest progress updated",

            {

                solvedProblems:

                participant.solvedProblems,


                penalty:

                participant.penalty

            }

        );



    }



};






module.exports = {

    updateContestProgress

};