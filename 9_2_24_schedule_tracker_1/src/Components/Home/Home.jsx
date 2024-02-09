// Home.js
import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../UserContext/UserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import "./Home.css";

const Home = () => {
  // const { user, logoutUser } = useContext(UserContext);
  const [myuser, setMyUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user);
    if (!user) {
      navigate("/login");
    } else {
      setMyUser(user.name);
    }
    // console.log(user.name);
  }, []);

  const navigate = useNavigate();

  const logoutUser = () => {
    // localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <ProtectedRoute>
      <>
        <div className="header__container">
          <h1>Schedule Management System</h1>
          <div>
            <h2>Welcome, {myuser ? myuser : "Guest"}!</h2>
            <button onClick={logoutUser} className="logout__btn">Logout</button>
          </div>
        </div>
        {/* Add chedules */}
        <div className="schedules">
          <Form user={myuser} />
        </div>
      </>
    </ProtectedRoute>
  );
};

export default Home;
