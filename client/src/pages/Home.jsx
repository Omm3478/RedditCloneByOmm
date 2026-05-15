import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5000/api/post");

      // SAFE handling for different backend formats
      const data = res.data?.posts || res.data?.data || res.data || [];

      setPosts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log("Error fetching posts:", err);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-white rounded-xl p-4 shadow-sm">

        {/* HEADER */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Home Feed
        </h1>

        {/* LOADING STATE */}
        {loading && (
          <p className="text-gray-500">Loading posts...</p>
        )}

        {/* EMPTY STATE */}
        {!loading && posts.length === 0 && (
          <p className="text-gray-500">No posts found</p>
        )}

        {/* POSTS */}
        <div>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>

      </div>
    </Layout>
  );
}

export default Home;