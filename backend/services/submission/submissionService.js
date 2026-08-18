const Submission = require("../../models/Submission");




const createSubmission = async (data) => {


    const submission = await Submission.create(data);


    return submission;


};





const getUserSubmissions = async (userId) => {


    const submissions = await Submission.find({

        user: userId

    })

    .populate("problem")

    .sort({

        submittedAt: -1

    });



    return submissions;


};






module.exports = {


    createSubmission,

    getUserSubmissions


};