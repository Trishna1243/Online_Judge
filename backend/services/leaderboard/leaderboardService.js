const User = require("../../models/User");



const getLeaderboard = async()=>{


    const users = await User.find()

        .select("-password");





    const leaderboard = users.map((user)=>{


        console.log(
            "LEADERBOARD:",
            user.name,
            "Solved:",
            user.solvedProblems.length,
            "Points:",
            user.points
        );




        return {


            _id:user._id,


            name:user.name,


            email:user.email,


            solved:user.solvedProblems.length,


            points:user.points || 0


        };


    });







    return leaderboard.sort(

        (a,b)=>{


            // Sort by points first

            if(b.points !== a.points){


                return b.points - a.points;


            }





            // If points are same, sort by solved problems

            return b.solved - a.solved;


        }

    );


};







module.exports = {


    getLeaderboard


};