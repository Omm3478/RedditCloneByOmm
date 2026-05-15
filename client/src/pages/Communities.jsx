import axios from "axios";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Communities(){

  const [communities, setCommunities] = useState([]);

  useEffect(()=>{

    fetchCommunities();

  },[]);

  const fetchCommunities = async()=>{

    try{

      const res = await axios.get(

        "http://localhost:5000/api/community"

      );

      setCommunities(res.data);

    }catch(err){

      console.log(err);

    }

  };

  return(

    <div>

      <h1>Communities</h1>

      {
        communities.map((community)=>(

          <div
            key={community._id}
            style={{
              border:"1px solid gray",
              padding:"10px",
              marginBottom:"10px"
            }}
          >

            <Link to={`/community/${community._id}`}>

              <h2>{community.name}</h2>

            </Link>

            <p>{community.description}</p>

          </div>

        ))
      }

    </div>
  );
}

export default Communities;