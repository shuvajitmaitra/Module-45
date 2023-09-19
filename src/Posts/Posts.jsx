import { useLoaderData } from "react-router-dom";
import Post from "../components/Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h3>Post: {posts.length} </h3>
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
