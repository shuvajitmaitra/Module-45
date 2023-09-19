import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const cardStyle = {
    margin: "10px",
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={cardStyle}>
      <h3>Id : {id} </h3>
      <h4 style={{ flexGrow: 1 }}>TitleL: {title} </h4>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;