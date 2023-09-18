const User = ({ user }) => {
  const { name, email, phone } = user;
  const cardStyle = {
    margin: "10px",
    padding: "10px",
    border: "2px solid yellow",
    borderRadius: "10px",
  };
  return (
    <div style={cardStyle}>
      <h2>Name: {name} </h2>
      <p>Email: {email} </p>
      <p>Phone: {phone} </p>
    </div>
  );
};

export default User;
