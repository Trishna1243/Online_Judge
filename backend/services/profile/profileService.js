const User = require("../../models/User");

const getProfile = async (userId) => {

    const user = await User.findById(userId)

        .populate(

            "favoriteProblems",

            "title difficulty tags"

        );

    if (!user) {

        throw new Error("User Not Found");

    }

    return {

        _id: user._id,

        name: user.name,

        email: user.email,

        role: user.role,

        rating: user.rating,

        streak: user.streak,

        badges: user.badges,

        solvedProblems: user.solvedProblems.length,

        easySolved: user.easySolved,

        mediumSolved: user.mediumSolved,

        hardSolved: user.hardSolved,

        favoriteProblems: user.favoriteProblems

    };

};

module.exports = {

    getProfile

};