const {

    getUserSubmissions

} = require("../services/submission/submissionService");

const {
    updateUserProgress
} = require("../services/user/userProgressService");



const getMySubmissionsController = async(req,res)=>{


    try{


        const submissions = await getUserSubmissions(

            req.user.id

        );



        res.status(200).json({


            success:true,

            submissions


        });


    }

    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};





module.exports={


    getMySubmissionsController


};