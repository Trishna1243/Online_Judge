const User = require("../../models/User");

const Submission = require("../../models/Submission");



const getLeaderboard = async()=>{


    const users = await User.find()

    .select("-password");



    const leaderboard = [];



    for(const user of users){


        const solved = await Submission.countDocuments({

            user:user._id,

            verdict:"Accepted"

        });



        leaderboard.push({

            name:user.name,

            email:user.email,

            solved

        });


    }




    return leaderboard.sort(

        (a,b)=> b.solved - a.solved

    );


};




module.exports = {

    getLeaderboard

};