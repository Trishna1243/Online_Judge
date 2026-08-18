const {
    getPracticeData
}=require("../services/practice/practiceService");



const getPracticeController=async(req,res)=>{


    try{


        const data =
        await getPracticeData(
            req.user.id
        );


        res.json({

            success:true,

            data

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
    getPracticeController
};