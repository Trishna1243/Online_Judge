const express = require("express");

const router = express.Router();


const protect = require("../middleware/authMiddleware");


const {

getProfileController,

updateProfileController,

changePasswordController


}=require("../controllers/userController");





router.get(

"/profile",

protect,

getProfileController

);





router.put(

"/profile",

protect,

updateProfileController

);





router.put(

"/password",

protect,

changePasswordController

);





module.exports=router;