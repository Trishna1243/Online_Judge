const mongoose = require("mongoose");



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


    tags:[

        {

            type:String

        }

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