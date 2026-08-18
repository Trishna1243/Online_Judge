const User = require("../../models/User");
const Problem = require("../../models/Problem");
const CommunityProblem = require("../../models/CommunityProblem");
const Submission = require("../../models/Submission");

const getDashboard = async () => {

    const totalUsers = await User.countDocuments();

    const totalProblems = await Problem.countDocuments();

    const totalSubmissions = await Submission.countDocuments();

    const pendingCommunityProblems =
        await CommunityProblem.countDocuments({

            status: "Pending"

        });

    return {

        totalUsers,

        totalProblems,

        totalSubmissions,

        pendingCommunityProblems

    };

};

const getUsers = async () => {

    return await User.find()

        .select("-password")

        .sort({

            createdAt: -1

        });

};

const suspendUser = async (userId) => {

    return await User.findByIdAndUpdate(

        userId,

        {

            role: "suspended"

        },

        {

            new: true

        }

    );

};

const deleteUser = async (userId) => {

    return await User.findByIdAndDelete(

        userId

    );

};

module.exports = {

    getDashboard,

    getUsers,

    suspendUser,

    deleteUser

};