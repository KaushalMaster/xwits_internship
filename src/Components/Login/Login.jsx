// Login.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic (e.g., API call)
    // For simplicity, we'll directly set the user in this example
    loginUser({ email: userCredentials.email, name: "John Doe" });

    // Redirect to home page
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (your form inputs) */}
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
