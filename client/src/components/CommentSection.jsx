import axios from "axios";

import { useEffect, useState } from "react";

function CommentSection({ postId }){

  const [comments, setComments] = useState([]);

  const [text, setText] = useState("");

  useEffect(()=>{

    fetchComments();

  },[]);


  const fetchComments = async()=>{

    try{

      const res = await axios.get(

        `http://localhost:5000/api/comment/${postId}`

      );

      setComments(res.data);

    }catch(err){

      console.log(err);

    }

  };


  const addComment = async()=>{

    try{

      await axios.post(

        "http://localhost:5000/api/comment",

        {
          text,
          postId
        }

      );

      setText("");

      fetchComments();

    }catch(err){

      console.log(err);

    }

  };

  return(

    <div>

      <h2>Comments</h2>

      <input
        type="text"
        placeholder="Write comment"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />

      <button onClick={addComment}>

        Add Comment

      </button>

      <br /><br />

      {
        comments.map((comment)=>(

          <div
            key={comment._id}
            style={{
              border:"1px solid gray",
              padding:"5px",
              marginBottom:"5px"
            }}
          >

            {comment.text}

          </div>

        ))
      }

    </div>
  );
}

export default CommentSection;