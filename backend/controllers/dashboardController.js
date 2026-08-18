const {

    getDashboardData

} = require("../services/dashboard/dashboardService");





const getDashboardController = async(req,res)=>{


    try{


        const data = await getDashboardData(

            req.user.id

        );



        res.status(200).json({

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

    getDashboardController

};