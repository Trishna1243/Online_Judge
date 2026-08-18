const User = require("../../models/User");

const Submission = require("../../models/Submission");



const updateUserStreak = async(userId)=>{


    console.log(
        "🔥 STREAK UPDATE RUNNING",
        userId
    );



    const user = await User.findById(userId);



    if(!user){

        throw new Error(
            "User not found"
        );

    }







    const submissions = await Submission.find({

        user:userId,

        verdict:"Accepted"

    })

    .sort({

        createdAt:-1

    });







    console.log(
        "Accepted submissions:",
        submissions.length
    );







    if(submissions.length === 0){

        return user;

    }








    const uniqueDates = [];






    submissions.forEach((submission)=>{


        const date = new Date(

            submission.createdAt

        );



        date.setHours(0,0,0,0);






        const exists = uniqueDates.some(

            existingDate =>

            existingDate.getTime() === date.getTime()

        );





        if(!exists){

            uniqueDates.push(date);

        }



    });







    uniqueDates.sort(

        (a,b)=> b-a

    );








    let streak = 1;






    for(let i=0;i<uniqueDates.length-1;i++){



        const difference =

        (

            uniqueDates[i]

            -

            uniqueDates[i+1]

        )

        /

        (

            1000 *

            60 *

            60 *

            24

        );






        if(difference === 1){


            streak++;


        }

        else{


            break;


        }



    }








    user.streak = streak;



    await user.save();






    console.log(

        "🔥 STREAK UPDATED:",

        streak

    );





    return user;


};





module.exports = {

    updateUserStreak

};