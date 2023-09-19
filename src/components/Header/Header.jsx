import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Header;
