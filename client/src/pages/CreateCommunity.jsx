import { useState } from "react";
import axios from "axios";

function CreateCommunity() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async(e) => {

    e.preventDefault();

    await axios.post(
      "https://redditclonebyomm-3.onrender.com/api/community",
      {
        name,
        description
      }
    );

    alert("Community Created");

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Community Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <textarea
        placeholder="Description"
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button type="submit">
        Create
      </button>

    </form>
  );
}

export default CreateCommunity;