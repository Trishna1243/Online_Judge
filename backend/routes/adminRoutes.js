const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const admin = require("../middleware/adminMiddleware");

const {

    dashboard,

    users,

    suspend,

    remove

} = require("../controllers/adminController");

router.use(

    protect,

    admin

);

router.get(

    "/dashboard",

    dashboard

);

router.get(

    "/users",

    users

);

router.put(

    "/users/:id/suspend",

    suspend

);

router.delete(

    "/users/:id",

    remove

);

module.exports = router;