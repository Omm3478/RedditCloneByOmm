const express = require("express");

const router = express.Router();

const Comment = require("../models/Comment");


// CREATE COMMENT
router.post("/", async(req,res)=>{

  try{

    const comment = new Comment({

      text: req.body.text,
      postId: req.body.postId

    });

    await comment.save();

    res.status(201).json(comment);

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});


// GET COMMENTS OF POST
router.get("/:postId", async(req,res)=>{

  try{

    const comments = await Comment.find({

      postId: req.params.postId

    });

    res.json(comments);

  }catch(err){

    res.status(500).json({
      message: err.message
    });

  }

});

module.exports = router;