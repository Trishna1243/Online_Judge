const express=require("express");

const router=express.Router();


const protect=require("../middleware/authMiddleware");


const {
getPracticeController
}=require("../controllers/practiceController");



router.get(

"/",

protect,

getPracticeController

);



module.exports=router;