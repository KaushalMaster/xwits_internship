// Login.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    // Check the user credentials
    const user = localStorage.getItem("users");
    if (user) {
      const myusers = JSON.parse(user);

      console.log(myusers);

      const findUser = myusers.find(
        (localuser) => localuser.email === data.email
      );
      if (findUser) {
        if (findUser.password === data.password) {
          localStorage.setItem("currentUser", JSON.stringify(findUser));
          navigate("/");
        } else {
          alert("Invalid Password");
        }
      } else {
        alert("Invalid Email");
      }
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* ... (your form inputs) */}
        <input
          {...register("email")}
          type="email"
          name="email"
          placeholder="Email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <input
          {...register("password")}
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
