// Login.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const submitForm = (data) => {
    // Get the user credentials from the form
    setUserCredentials(data);
    // Check the user credentials
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      if (
        userData.email === userCredentials.email &&
        userData.password === userCredentials.password
      ) {
        // Redirect to home page
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("User not found");
    }
    // Redirect to home page
    // navigate("/");
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* ... (your form inputs) */}
        <input
          {...register("email", {
            required: "Email Required",
            pattern: /^\S+@\S+$/i,
          })}
          type="email"
          name="email"
          placeholder="Email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <input
          {...register("password", {
            required: "Password Required",
            minLength: 8,
          })}
          type="password"
          name="password"
          placeholder="Password"
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
