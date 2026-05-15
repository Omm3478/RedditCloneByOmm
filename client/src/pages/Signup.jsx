import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async(e) => {

    e.preventDefault();

    try{

      await axios.post(
        "https://redditclonebyomm-3.onrender.com/api/auth/signup",
        {
          username,
          email,
          password
        }
      );

      alert("Signup Successful");

      navigate("/login");

    }catch(err){

      alert("Signup Failed");

      console.log(err);
    }

  };

  return (

    <div>

      <h1>Signup</h1>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;