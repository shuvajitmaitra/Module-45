import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </div>
  );
};

export default Header;
