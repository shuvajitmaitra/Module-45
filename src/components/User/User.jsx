import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
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
      <h2>{name} </h2>
      <p>{email} </p>
      <p style={{ flexGrow: 1 }}>Phone: {phone} </p>
      <Link to={`/user/${id}`}>Show details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
