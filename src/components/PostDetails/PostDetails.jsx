import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();

  const cardStyle = {
    width: "300px",

    margin: "auto",
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={cardStyle}>
      <h3>Id: {post.id} </h3>
      <p>{post.body}</p>
    </div>
  );
};
PostDetails.propTypes = {
  params: PropTypes.object,
};
export default PostDetails;
