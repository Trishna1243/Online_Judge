const express=require("express");

const router=express.Router();


const protect=require("../middleware/authMiddleware");


const {

getDashboardController

}=require("../controllers/dashboardController");




router.get(

"/",

protect,

getDashboardController

);



module.exports=router;