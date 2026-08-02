const mongoose = require("mongoose");

const dailyChallengeSchema = new mongoose.Schema(

    {

        date: {

            type: Date,

            required: true,

            unique: true

        },

        problem: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Problem",

            required: true

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model(

    "DailyChallenge",

    dailyChallengeSchema

);