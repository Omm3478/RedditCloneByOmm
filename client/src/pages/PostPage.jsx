import axios from "axios";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import CommentSection from "../components/CommentSection";

function PostPage(){

  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(()=>{

    fetchPost();

  },[]);

  const fetchPost = async()=>{

    try{

      const res = await axios.get(

        `http://localhost:5000/api/post/${id}`

      );

      setPost(res.data);

    }catch(err){

      console.log(err);

    }

  };

  if(!post){

    return <h1>Loading...</h1>;

  }

  return(

    <div>

      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <p>Votes: {post.votes}</p>

      <CommentSection postId={post._id} />

    </div>
  );
}

export default PostPage;