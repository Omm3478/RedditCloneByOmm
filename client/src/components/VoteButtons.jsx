import axios from "axios";
import { useState } from "react";

function VoteButtons({ postId, initialVotes }) {

  const [votes, setVotes] = useState(initialVotes);

  const upvote = async() => {

    const res = await axios.put(
      `http://localhost:5000/api/post/${postId}/upvote`
    );

    setVotes(res.data.votes);
  };

  const downvote = async() => {

    const res = await axios.put(
      `http://localhost:5000/api/post/${postId}/downvote`
    );

    setVotes(res.data.votes);
  };

  return (

    <div>

      <button onClick={upvote}>
        ⬆
      </button>

      <span>{votes}</span>

      <button onClick={downvote}>
        ⬇
      </button>

    </div>
  );
}

export default VoteButtons;