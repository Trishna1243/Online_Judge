const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const admin = require("../middleware/adminMiddleware");


const {

    dashboard,

    users,

    suspend,

    remove,

    getStats

} = require("../controllers/adminController");



router.use(

    protect,

    admin

);



// dashboard

router.get(

    "/dashboard",

    dashboard

);



// stats for admin cards

router.get(

    "/stats",

    getStats

);



// users

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