import VoteButtons from "./VoteButtons";

import { Link } from "react-router-dom";

function PostCard({ post }) {

  return (

    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px"
      }}
    >

      <VoteButtons
        postId={post._id}
        initialVotes={post.votes}
      />

      <Link to={`/post/${post._id}`}>

        <h2>{post.title}</h2>

      </Link>

      <p>{post.content}</p>

    </div>
  );
}

export default PostCard;