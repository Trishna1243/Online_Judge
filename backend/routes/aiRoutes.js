const express=require("express");

const router=express.Router();



router.post("/",(req,res)=>{


    const {
        question
    }=req.body;



    res.json({

        success:true,

        answer:
        `AI Assistant response for: ${question}`

    });


});



module.exports=router;