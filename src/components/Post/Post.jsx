import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const cardStyle = {
    margin: "10px",
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    background: "cadetblue",
  };

  const navigate = useNavigate();

  const handleShowMoreButton = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div style={cardStyle}>
      <h3>Id : {id} </h3>
      <h4 style={{ flexGrow: 1 }}>TitleL: {title} </h4>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleShowMoreButton}>Show More details</button>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
