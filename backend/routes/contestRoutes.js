const express=require("express");

const router=express.Router();



router.get("/",(req,res)=>{


res.json({

success:true,

contests:[

{

title:"Weekly Coding Challenge",

status:"Upcoming"

}

]

});


});



module.exports=router;