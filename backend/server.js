const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();


const app = express();



app.use(

    cors({

        origin:true,

        credentials:true

    })

);



app.use(express.json());




// =====================
// ROUTES
// =====================


const authRoutes = require("./routes/authRoutes");

const problemRoutes = require("./routes/problemRoutes");

const compilerRoutes = require("./routes/compilerRoutes");

const submissionRoutes = require("./routes/submissionRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

const userRoutes = require("./routes/userRoutes");

const leaderboardRoutes = require("./routes/leaderboardRoutes");

const practiceRoutes = require("./routes/practiceRoutes");

const contestRoutes = require("./routes/contestRoutes");

const communityRoutes = require("./routes/communityRoutes");

const aiRoutes = require("./routes/aiRoutes");




// =====================
// API MOUNTING
// =====================



app.use(
    "/api/auth",
    authRoutes
);



app.use(
    "/api/problems",
    problemRoutes
);



app.use(
    "/api/compiler",
    compilerRoutes
);



app.use(
    "/api/submissions",
    submissionRoutes
);



app.use(
    "/api/dashboard",
    dashboardRoutes
);



app.use(
    "/api/users",
    userRoutes
);



app.use(
    "/api/leaderboard",
    leaderboardRoutes
);



app.use(
    "/api/practice",
    practiceRoutes
);



app.use(
    "/api/contests",
    contestRoutes
);



app.use(
    "/api/community",
    communityRoutes
);



app.use(
    "/api/ai",
    aiRoutes
);




// TEST ROUTE


app.get("/",(req,res)=>{


    res.send(
        "Online Judge Backend is Running"
    );


});




// DATABASE


mongoose.connect(

    process.env.MONGODB_URI

)

.then(()=>{


    console.log(
        "MongoDB Connected Successfully"
    );


})

.catch((error)=>{


    console.log(error);


});





const PORT = process.env.PORT || 5000;



app.listen(

    PORT,

    ()=>{


        console.log(

            `Server running on port ${PORT}`

        );


    }

);