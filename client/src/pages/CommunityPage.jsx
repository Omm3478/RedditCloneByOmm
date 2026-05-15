import axios from "axios";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import PostCard from "../components/PostCard";

function CommunityPage(){

  const { id } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    fetchPosts();

  },[]);

  const fetchPosts = async()=>{

    try{

      const res = await axios.get(

        `http://localhost:5000/api/post/community/${id}`

      );

      setPosts(res.data);

    }catch(err){

      console.log(err);

    }

  };

  return(

    <div>

      <h1>Community Feed</h1>

      {
        posts.map((post)=>(

          <PostCard
            key={post._id}
            post={post}
          />

        ))
      }

    </div>
  );
}

export default CommunityPage;