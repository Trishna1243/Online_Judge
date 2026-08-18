const mongoose = require("mongoose");



const exampleSchema = new mongoose.Schema({

    input:{

        type:String,

        required:true

    },


    output:{

        type:String,

        required:true

    },


    explanation:{

        type:String,

        required:false

    }

});





const testCaseSchema = new mongoose.Schema({

    input:{

        type:String,

        required:true

    },


    output:{

        type:String,

        required:true

    },


    isHidden:{

        type:Boolean,

        default:true

    }

});






const problemSchema = new mongoose.Schema(

{

    title:{


        type:String,


        required:true


    },





    description:{


        type:String,


        required:true


    },





    difficulty:{


        type:String,


        enum:[

            "Easy",

            "Medium",

            "Hard"

        ],


        required:true


    },





    points:{


        type:Number,


        default:10


    },





    tags:[


        {


            type:String


        }


    ],







    constraints:{


        type:String,


        required:true


    },









    examples:[


        exampleSchema


    ],







    testCases:[


        testCaseSchema


    ]



},

{

    timestamps:true

}



);



module.exports = mongoose.model(

    "Problem",

    problemSchema

);