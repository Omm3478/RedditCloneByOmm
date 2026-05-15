import axios from "axios";
import { useState } from "react";

function VoteButtons({ postId, initialVotes }) {

  const [votes, setVotes] = useState(initialVotes);

  const upvote = async() => {

    const res = await axios.put(
      `https://redditclonebyomm-3.onrender.com/api/post/${postId}/upvote`
    );

    setVotes(res.data.votes);
  };

  const downvote = async() => {

    const res = await axios.put(
      `https://redditclonebyomm-3.onrender.com/api/post/${postId}/downvote`
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