const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();


// ROUTES
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/PostRoute");
const commentRoutes = require("./routes/commentRoutes");
const communityRoutes = require("./routes/communityRoutes");


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// API ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/community", communityRoutes);


// MONGODB CONNECTION
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// SERVER
app.listen(5000, ()=>{

  console.log("Server running");

});