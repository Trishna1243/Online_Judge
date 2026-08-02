const express=require("express");

const router=express.Router();


const protect=require("../middleware/authMiddleware");


const {

getProfileController

}=require("../controllers/userController");



router.get(

"/profile",

protect,

getProfileController

);



module.exports=router;