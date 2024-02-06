// Home.js
import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Home = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <ProtectedRoute>
      <div>
        <h2>Welcome, {user ? user.name : "Guest"}!</h2>
        <button onClick={logoutUser}>Logout</button>
        {/* ... (other content) */}
      </div>
    </ProtectedRoute>
  );
};

export default Home;
