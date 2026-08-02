const {

    getDashboard,

    getUsers,

    suspendUser,

    deleteUser

} = require("../services/admin/adminService");

const dashboard = async (req, res) => {

    try {

        const data = await getDashboard();

        res.json({

            success: true,

            dashboard: data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const users = async (req, res) => {

    try {

        const data = await getUsers();

        res.json({

            success: true,

            users: data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const suspend = async (req, res) => {

    try {

        const user = await suspendUser(

            req.params.id

        );

        res.json({

            success: true,

            user

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const remove = async (req, res) => {

    try {

        await deleteUser(

            req.params.id

        );

        res.json({

            success: true

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

    dashboard,

    users,

    suspend,

    remove

};