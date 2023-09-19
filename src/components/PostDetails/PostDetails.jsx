import PropTypes from "prop-types";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { postId } = useParams();
  console.log(postId);
  return (
    <div style={cardStyle}>
      <h3>Id: {post.id} </h3>
      <p>{post.body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

PostDetails.propTypes = {
  params: PropTypes.object,
};

export default PostDetails;
