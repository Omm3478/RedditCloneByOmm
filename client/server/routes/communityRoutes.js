const express = require("express");
const router = express.Router();

const Community = require("../models/Community");


// CREATE COMMUNITY
router.post("/", async(req,res)=>{

  try{

    const community = new Community({
      name: req.body.name,
      description: req.body.description
    });

    await community.save();

    res.status(201).json(community);

  }catch(err){
    res.status(500).json({
      message: err.message
    });
  }

});


// GET ALL COMMUNITIES
router.get("/", async(req,res)=>{

  try{

    const communities = await Community.find();

    res.json(communities);

  }catch(err){
    res.status(500).json({
      message: err.message
    });
  }

});


// GET SINGLE COMMUNITY
router.get("/:name", async(req,res)=>{

  try{

    const community = await Community.findOne({
      name: req.params.name
    });

    res.json(community);

  }catch(err){
    res.status(500).json({
      message: err.message
    });
  }

});


module.exports = router;