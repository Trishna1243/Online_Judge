const mongoose = require("mongoose");


const communityPostSchema = new mongoose.Schema(

{

    title:{

        type:String,

        required:true

    },


    content:{

        type:String,

        required:true

    },


    author:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"User",

        required:true

    },


    tag:{

        type:String,

        default:"General"

    },


    votes:{

        type:Number,

        default:0

    },


    comments:{

        type:Number,

        default:0

    }


},

{

    timestamps:true

}


);


module.exports = mongoose.model(
    "CommunityPost",
    communityPostSchema
);