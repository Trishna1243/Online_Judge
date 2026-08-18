const User = require("../../models/User");

const updateBadges = async (userId) => {

    const user = await User.findById(userId);

    if (!user) {

        throw new Error("User Not Found");

    }

    const solved = user.solvedProblems.length;

    const badges = [];

    if (solved >= 10) badges.push("Bronze");

    if (solved >= 25) badges.push("Silver");

    if (solved >= 50) badges.push("Gold");

    if (solved >= 100) badges.push("Platinum");

    user.badges = badges;

    await user.save();

    return badges;

};

const getBadgeProgress = async (userId) => {

    const user = await User.findById(userId);

    if (!user) {

        throw new Error("User Not Found");

    }

    return {

        solvedProblems: user.solvedProblems.length,

        badges: user.badges,

        nextBadge:

            user.solvedProblems.length < 10 ? "Bronze" :

            user.solvedProblems.length < 25 ? "Silver" :

            user.solvedProblems.length < 50 ? "Gold" :

            user.solvedProblems.length < 100 ? "Platinum" :

            "Completed"

    };

};

module.exports = {

    updateBadges,

    getBadgeProgress

};