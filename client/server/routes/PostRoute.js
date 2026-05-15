const express = require("express");

const router = express.Router();

const Post = require("../models/Post");


// CREATE POST
router.post("/", async(req,res)=>{

  try{

    const post = new Post({

      title: req.body.title,

      content: req.body.content,

      community: req.body.community

    });

    await post.save();

    res.status(201).json(post);

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});


// GET ALL POSTS
router.get("/", async(req,res)=>{

  try{

    const posts = await Post.find()
      .populate("community");

    res.json(posts);

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});


// GET POSTS OF COMMUNITY
router.get("/community/:id", async(req,res)=>{

  try{

    const posts = await Post.find({

      community: req.params.id

    }).populate("community");

    res.json(posts);

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});


// GET SINGLE POST
router.get("/:id", async(req,res)=>{

  try{

    const post = await Post.findById(
      req.params.id
    );

    res.json(post);

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});


// UPVOTE POST
router.put("/:id/upvote", async(req,res)=>{

  try{

    const post = await Post.findById(
      req.params.id
    );

    post.votes += 1;

    await post.save();

    res.json(post);

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});


// DOWNVOTE POST
router.put("/:id/downvote", async(req,res)=>{

  try{

    const post = await Post.findById(
      req.params.id
    );

    post.votes -= 1;

    await post.save();

    res.json(post);

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});


module.exports = router;