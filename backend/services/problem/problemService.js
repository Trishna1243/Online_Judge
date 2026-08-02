const Problem = require("../../models/Problem");

const User = require("../../models/User");

const createProblem = async (problemData) => {

    return await Problem.create(problemData);

};

const getAllProblems = async (queryParams = {}) => {

    const {

        search,

        difficulty,

        tag,

        page = 1,

        limit = 10

    } = queryParams;

    const filter = {};

    if (search) {

        filter.title = {

            $regex: search,

            $options: "i"

        };

    }

    if (difficulty) {

        filter.difficulty = difficulty;

    }

    if (tag) {

        filter.tags = tag;

    }

    const skip =

        (Number(page) - 1) *

        Number(limit);

    const problems = await Problem.find(filter)

        .select("-testCases")

        .sort({

            createdAt: -1

        })

        .skip(skip)

        .limit(Number(limit));

    const totalProblems =

        await Problem.countDocuments(filter);

    return {

        problems,

        currentPage: Number(page),

        totalPages: Math.ceil(

            totalProblems / Number(limit)

        ),

        totalProblems

    };

};

const getProblemById = async (id) => {

    const problem = await Problem.findById(id);

    if (!problem) {

        return null;

    }

    const sampleTestCases =

        problem.testCases.filter(

            (testCase) => !testCase.isHidden

        );

    return {

        _id: problem._id,

        title: problem.title,

        description: problem.description,

        difficulty: problem.difficulty,

        tags: problem.tags,

        sampleTestCases,

        createdAt: problem.createdAt,

        updatedAt: problem.updatedAt

    };

};

const addFavoriteProblem = async (

    userId,

    problemId

) => {

    const user = await User.findById(userId);

    if (!user) {

        throw new Error("User Not Found");

    }

    if (

        !user.favoriteProblems.includes(problemId)

    ) {

        user.favoriteProblems.push(problemId);

        await user.save();

    }

    return user;

};

const removeFavoriteProblem = async (

    userId,

    problemId

) => {

    const user = await User.findById(userId);

    if (!user) {

        throw new Error("User Not Found");

    }

    user.favoriteProblems =

        user.favoriteProblems.filter(

            (id) =>

                id.toString() !==

                problemId

        );

    await user.save();

    return user;

};

const getFavoriteProblems = async (

    userId

) => {

    const user = await User.findById(userId)

        .populate(

            "favoriteProblems",

            "title difficulty tags"

        );

    if (!user) {

        throw new Error("User Not Found");

    }

    return user.favoriteProblems;

};

const updateProblem = async (

    id,

    data

) => {

    return await Problem.findByIdAndUpdate(

        id,

        data,

        {

            new: true

        }

    );

};

const deleteProblem = async (id) => {

    return await Problem.findByIdAndDelete(id);

};

module.exports = {

    createProblem,

    getAllProblems,

    getProblemById,

    addFavoriteProblem,

    removeFavoriteProblem,

    getFavoriteProblems,

    updateProblem,

    deleteProblem

};