import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is home components</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
