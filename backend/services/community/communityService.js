const CommunityProblem = require("../../models/CommunityProblem");
const Problem = require("../../models/Problem");

const submitProblem = async (data, userId) => {

    return await CommunityProblem.create({

        ...data,

        submittedBy: userId

    });

};

const getPendingProblems = async () => {

    return await CommunityProblem.find({

        status: "Pending"

    }).populate(

        "submittedBy",

        "name email"

    );

};

const approveProblem = async (id, adminId) => {

    const communityProblem = await CommunityProblem.findById(id);

    if (!communityProblem) {

        throw new Error("Problem Not Found");

    }

    communityProblem.status = "Approved";
    communityProblem.approvedBy = adminId;
    communityProblem.approvedAt = new Date();

    await communityProblem.save();

    await Problem.create({

        title: communityProblem.title,

        description: communityProblem.description,

        difficulty: communityProblem.difficulty,

        tags: communityProblem.tags,

        testCases: communityProblem.testCases

    });

    return communityProblem;

};

const rejectProblem = async (id, adminId) => {

    const communityProblem = await CommunityProblem.findById(id);

    if (!communityProblem) {

        throw new Error("Problem Not Found");

    }

    communityProblem.status = "Rejected";
    communityProblem.approvedBy = adminId;
    communityProblem.approvedAt = new Date();

    await communityProblem.save();

    return communityProblem;

};

module.exports = {

    submitProblem,

    getPendingProblems,

    approveProblem,

    rejectProblem

};