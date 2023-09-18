import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "../../../src/App.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h3>This is home components</h3>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
