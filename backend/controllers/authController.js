const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;


        if(!name || !email || !password){

            return res.status(400).json({

                message:"All fields are required"

            });

        }



        const existingUser = await User.findOne({ email });


        if(existingUser){

            return res.status(400).json({

                message:"User already exists"

            });

        }



        const hashedPassword = await bcrypt.hash(password,10);



        const newUser = await User.create({

            name,

            email,

            password: hashedPassword

        });



        res.status(201).json({

            message:"User Registered Successfully",

            user:newUser

        });



    }
    catch(error){


        console.log("REGISTER ERROR:",error);



        res.status(500).json({

            message:error.message

        });


    }


};






const loginUser = async(req,res)=>{


    try{


        const {email,password}=req.body;



        const existingUser = await User.findOne({email});



        if(!existingUser){

            return res.status(404).json({

                message:"User not found"

            });

        }




        const isPasswordCorrect = await bcrypt.compare(

            password,

            existingUser.password

        );



        if(!isPasswordCorrect){

            return res.status(401).json({

                message:"Invalid Password"

            });

        }




        const token = jwt.sign(

            {

                id:existingUser._id

            },

            process.env.JWT_SECRET,

            {

                expiresIn:"1d"

            }

        );



        res.status(200).json({

            message:"Login Successful",

            token,


            user:{

                id:existingUser._id,

                name:existingUser.name,

                email:existingUser.email,

                role:existingUser.role

            }

        });



    }
    catch(error){


        console.log("LOGIN ERROR:",error);


        res.status(500).json({

            message:error.message

        });


    }


};




module.exports={

    registerUser,

    loginUser

};