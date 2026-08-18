const User = require("../models/User");

const bcrypt = require("bcryptjs");




// GET PROFILE

const getProfileController = async(req,res)=>{


    try{


        const user = await User.findById(

            req.user.id

        )

        .select("-password");



        if(!user){


            return res.status(404).json({

                success:false,

                message:"User not found"

            });


        }




        res.status(200).json({

            success:true,

            user

        });



    }


    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }



};









// UPDATE PROFILE

const updateProfileController = async(req,res)=>{


    try{


        const user = await User.findById(

            req.user.id

        );



        if(!user){


            return res.status(404).json({

                success:false,

                message:"User not found"

            });


        }





        user.name = req.body.name || user.name;



        await user.save();





        res.status(200).json({

            success:true,

            message:"Profile updated successfully",

            user

        });



    }


    catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }



};











// CHANGE PASSWORD

const changePasswordController = async(req,res)=>{


    try{


        console.log("CHANGE PASSWORD REQUEST");

        console.log("USER:", req.user);

        console.log("BODY:", req.body);




        const user = await User.findById(

            req.user.id

        );



        console.log("USER FOUND:", user);



        if(!user){


            return res.status(404).json({

                success:false,

                message:"User not found"

            });


        }






        const {

            oldPassword,

            newPassword


        } = req.body;






        if(!oldPassword || !newPassword){


            return res.status(400).json({

                success:false,

                message:"Both passwords are required"

            });


        }







        const passwordMatch = await bcrypt.compare(

            oldPassword,

            user.password

        );



        console.log(

            "PASSWORD MATCH:",

            passwordMatch

        );






        if(!passwordMatch){


            return res.status(400).json({

                success:false,

                message:"Old password incorrect"

            });


        }








        const hashedPassword = await bcrypt.hash(

            newPassword,

            10

        );




        user.password = hashedPassword;



        await user.save();






        res.status(200).json({

            success:true,

            message:"Password changed successfully"

        });



    }


    catch(error){


        console.log(

            "PASSWORD ERROR:",

            error

        );



        res.status(500).json({

            success:false,

            message:error.message

        });


    }



};









module.exports = {


    getProfileController,


    updateProfileController,


    changePasswordController


};