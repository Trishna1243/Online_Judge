const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    },

    solvedProblems: {

        type: Number,

        default: 0

    },

    penalty: {

        type: Number,

        default: 0

    }

}, {

    _id: false

});

const contestSchema = new mongoose.Schema(

    {

        title: {

            type: String,

            required: true,

            trim: true

        },

        description: {

            type: String,

            required: true

        },

        startTime: {

            type: Date,

            required: true

        },

        endTime: {

            type: Date,

            required: true

        },

        problems: [

            {

                type: mongoose.Schema.Types.ObjectId,

                ref: "Problem"

            }

        ],

        participants: [

            participantSchema

        ],

        createdBy: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model(

    "Contest",

    contestSchema

);