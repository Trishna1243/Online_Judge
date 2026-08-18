const express = require("express");

const router = express.Router();


const {
    getAIProvider
} = require("../services/ai/aiFactory");


console.log("🔥 AI ROUTE FILE LOADED");




// =======================
// AI CHAT
// POST /api/ai
// =======================

router.post("/", async(req,res)=>{


    try{


        const {
            question
        } = req.body;



        if(!question){

            return res.status(400).json({

                success:false,

                message:"Question required"

            });

        }



        const provider = getAIProvider();



        const answer =
        await provider.chat(question);



        res.json({

            success:true,

            answer

        });


    }


    catch(error){


        console.log(error);


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


});








// =======================
// AI HINT
// POST /api/ai/hint
// =======================

router.post("/hint", async(req,res)=>{


    try{


        const {

            problem,

            code

        } = req.body;



        const provider = getAIProvider();



        const result =
        await provider.generateHint(

            problem,

            code

        );



        res.json({

            success:true,

            hint:result.hint

        });



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


});








// =======================
// AI CODE REVIEW
// POST /api/ai/review
// =======================

router.post("/review", async(req,res)=>{


    try{


        const {

            problem,

            code

        } = req.body;



        const provider = getAIProvider();



        const result =
        await provider.reviewCode(

            problem,

            code

        );



        res.json({

            success:true,

            review:result.review

        });



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


});





module.exports = router;