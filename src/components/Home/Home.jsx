import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "../../../src/App.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1>This is home components</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
