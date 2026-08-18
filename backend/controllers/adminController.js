const User=require("../models/User");
const Problem=require("../models/Problem");
const Contest=require("../models/Contest");
const Submission=require("../models/Submission");


const getAdminStats=async(req,res)=>{


try{


const users=await User.countDocuments();

const problems=await Problem.countDocuments();

const contests=await Contest.countDocuments();

const submissions=await Submission.countDocuments();



res.json({

success:true,

stats:{

users,

problems,

contests,

submissions

}

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
getAdminStats
};

const User = require("../models/User");
const Problem = require("../models/Problem");
const Contest = require("../models/Contest");
const Submission = require("../models/Submission");



const getStats = async(req,res)=>{


try{


const users = await User.countDocuments();


const problems = await Problem.countDocuments();


const contests = await Contest.countDocuments();


const submissions = await Submission.countDocuments();



res.status(200).json({

success:true,


stats:{


users,

problems,

contests,

submissions


}


});


}


catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};