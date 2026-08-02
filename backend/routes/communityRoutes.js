const express = require("express");

const router = express.Router();


router.get("/", (req,res)=>{


    res.json({

        success:true,

        posts:[

            {
                title:"Welcome to CodeArena Community",
                author:"Admin",
                content:"Discuss coding problems and share solutions."
            },

            {
                title:"Interview Preparation Tips",
                author:"Community",
                content:"Share your placement preparation journey."
            }

        ]

    });


});


module.exports = router;