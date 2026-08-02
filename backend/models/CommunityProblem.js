const mongoose = require("mongoose");

const communityProblemSchema = new mongoose.Schema(

    {

        title: {

            type: String,

            required: true

        },

        description: {

            type: String,

            required: true

        },

        difficulty: {

            type: String,

            enum: [

                "Easy",

                "Medium",

                "Hard"

            ],

            required: true

        },

        tags: [

            String

        ],

        testCases: [

            {

                input: String,

                output: String,

                isHidden: Boolean

            }

        ],

        submittedBy: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        status: {

            type: String,

            enum: [

                "Pending",

                "Approved",

                "Rejected"

            ],

            default: "Pending"

        },

        approvedBy: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            default: null

        },

        approvedAt: {

            type: Date,

            default: null

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model(

    "CommunityProblem",

    communityProblemSchema

);