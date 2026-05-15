import { Link, useNavigate } from "react-router-dom";

function Navbar(){

  const navigate = useNavigate();

  const logout = ()=>{

    localStorage.removeItem("token");

    navigate("/login");

  };

  return(

    <div
      style={{
        display:"flex",
        gap:"20px",
        padding:"10px",
        borderBottom:"1px solid gray",
        marginBottom:"20px"
      }}
    >

      <Link to="/">Home</Link>

      <Link to="/create-post">

        Create Post

      </Link>

      <Link to="/communities">

        Communities

      </Link>

      <Link to="/create-community">

        Create Community

      </Link>

      <button onClick={logout}>

        Logout

      </button>

    </div>
  );
}

export default Navbar;