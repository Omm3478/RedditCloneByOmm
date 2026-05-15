const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// SIGNUP
router.post("/signup", async(req,res)=>{

  try{

    const { username, email, password } = req.body;

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = new User({
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({
      message: "User Created"
    });

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});


// LOGIN
router.post("/login", async(req,res)=>{

  try{

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user){

      return res.status(400).json({
        message: "User Not Found"
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if(!isMatch){

      return res.status(400).json({
        message: "Invalid Password"
      });

    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey"
    );

    res.json({
      token
    });

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});

module.exports = router;