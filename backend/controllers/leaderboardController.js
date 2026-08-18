const {

getLeaderboard

}=require("../services/leaderboard/leaderboardService");



const getLeaderboardController=async(req,res)=>{


try{


const data=await getLeaderboard();



res.json({

success:true,

leaderboard:data

});


}

catch(error){


res.status(500).json({

message:error.message

});


}


};



module.exports={

getLeaderboardController

};