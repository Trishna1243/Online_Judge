const User = require("../../models/User");

const Problem = require("../../models/Problem");



const updateUserProgress = async({

    userId,

    problemId

})=>{


const user = await User.findById(userId);


const problem = await Problem.findById(problemId);





if(!user || !problem){

    throw new Error(
        "User or Problem not found"
    );

}





const alreadySolved = user.solvedProblems.some(

    id =>

    id.toString() === problemId.toString()

);





if(alreadySolved){

    console.log(
        "Problem already solved"
    );

    return user;

}







user.solvedProblems.push(problemId);







if(problem.difficulty === "Easy"){


    user.easySolved += 1;


}



else if(problem.difficulty === "Medium"){


    user.mediumSolved += 1;


}



else if(problem.difficulty === "Hard"){


    user.hardSolved += 1;


}







user.points += problem.points || 0;







await user.save();





console.log(
    "USER PROFILE UPDATED",
    {

        user:user.name,

        points:user.points,

        solved:user.solvedProblems.length,

        easy:user.easySolved,

        medium:user.mediumSolved,

        hard:user.hardSolved

    }
);






return user;


};





module.exports = {

    updateUserProgress

};