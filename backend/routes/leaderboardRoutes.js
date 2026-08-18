const express=require("express");

const router=express.Router();


const {

getLeaderboardController

}=require("../controllers/leaderboardController");



router.get(

"/",

getLeaderboardController

);



module.exports=router;