const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(

{

    name: {

        type: String,

        required: true

    },


    email: {

        type: String,

        required: true,

        unique: true

    },


    password: {

        type: String,

        required: true

    },


    role: {

        type: String,

        enum: [

            "user",

            "admin"

        ],

        default: "user"

    },



    favoriteProblems: [

        {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Problem"

        }

    ],



    rating: {

        type: Number,

        default: 0

    },



    // Total points earned by solving problems
    points: {

        type: Number,

        default: 0

    },



    streak: {

        type: Number,

        default: 0

    },



    badges: [

        String

    ],



    solvedProblems: [

        {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Problem"

        }

    ],



    easySolved: {

        type: Number,

        default: 0

    },



    mediumSolved: {

        type: Number,

        default: 0

    },



    hardSolved: {

        type: Number,

        default: 0

    }

},


{

    timestamps: true

}


);



module.exports = mongoose.model(

    "User",

    userSchema

);