const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const problemRoutes = require("./routes/problemRoutes");
const compilerRoutes = require("./routes/compilerRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/compiler", compilerRoutes);
app.use("/api/submissions", submissionRoutes);

app.get("/", (req, res) => {
    res.send("Online Judge Backend is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});