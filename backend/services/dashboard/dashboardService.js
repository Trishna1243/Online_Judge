const Submission = require("../../models/Submission");



const getDashboardData = async(userId)=>{


    const submissions = await Submission.find({

        user:userId

    });



    const solvedProblems = await Submission.distinct(

        "problem",

        {

            user:userId,

            verdict:"Accepted"

        }

    );



    const totalSolved = solvedProblems.length;



    const totalSubmissions = submissions.length;



    const accepted = submissions.filter(

        (item)=>item.verdict==="Accepted"

    ).length;



    const accuracy = totalSubmissions === 0

    ?

    0

    :

    Math.round(

        (accepted / totalSubmissions) * 100

    );





    // ==========================
    // CURRENT STREAK
    // ==========================


    const acceptedSubmissions = await Submission.find({

        user:userId,

        verdict:"Accepted"

    })

    .sort({

        submittedAt:-1

    });



    const uniqueDates = [

        ...new Set(

            acceptedSubmissions.map((item)=>{

                return new Date(

                    item.submittedAt

                )

                .toISOString()

                .split("T")[0];

            })

        )

    ];



    let streak = 0;



    if(uniqueDates.length > 0){


        let currentDate = new Date();



        for(let i=0;i<uniqueDates.length;i++){


            const date = new Date(

                uniqueDates[i]

            );



            const difference = Math.floor(

                (

                    currentDate - date

                )

                /

                (1000*60*60*24)

            );



            if(difference === i){


                streak++;


            }

            else{


                break;


            }


        }


    }





    const recentSubmissions = await Submission.find({

        user:userId

    })

    .populate("problem")

    .sort({

        submittedAt:-1

    })

    .limit(5);






    return {


        solved: totalSolved,


        submissions: totalSubmissions,


        accuracy,


        streak,


        recentSubmissions


    };


};






module.exports = {


    getDashboardData


};