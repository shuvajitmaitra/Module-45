import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h3>Total User: {users.length} </h3>
      <p>I am a little good user</p>
      <div className="user-container">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
