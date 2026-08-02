const {

    getProfile

} = require("../services/profile/profileService");

const {

    getBadgeProgress

} = require("../services/user/badgeService");

const profile = async (req, res) => {

    try {

        const data = await getProfile(

            req.user.id

        );

        res.status(200).json({

            success: true,

            profile: data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const badgeProgress = async (req, res) => {

    try {

        const progress = await getBadgeProgress(

            req.user.id

        );

        res.status(200).json({

            success: true,

            progress

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    profile,

    badgeProgress

};