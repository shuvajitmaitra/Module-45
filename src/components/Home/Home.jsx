import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import "../../../src/App.css";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <h3>This is home components</h3>
      {navigation.state === "loading" ? (
        "hello i am shuvo..."
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
