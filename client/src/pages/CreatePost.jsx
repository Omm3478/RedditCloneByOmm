import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost(){

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    title:"",
    content:""

  });

  const handleChange = (e)=>{

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async(e)=>{

    e.preventDefault();

    try{

      await axios.post(

        "https://redditclonebyomm-3.onrender.com/api/post",

        formData

      );

      alert("Post Created");

      navigate("/");

    }catch(err){

      console.log(err);

      alert("Failed");

    }

  };

  return(

    <div>

      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="content"
          placeholder="Post Content"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">

          Create Post

        </button>

      </form>

    </div>
  );
}

export default CreatePost;