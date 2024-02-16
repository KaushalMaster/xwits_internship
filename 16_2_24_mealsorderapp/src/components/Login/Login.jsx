import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(8),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const submitFormData = (data) => {
    //   Fetching registered users from localstorage
    const registeredUsers =
      JSON.parse(localStorage.getItem("Registered__users")) || [];
    const user = registeredUsers.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (user) {
      //   alert("User Logged In Successfully!");
      localStorage.setItem("loggedIn_user", JSON.stringify(data.username));
      navigate("/");
    } else {
      alert("Invalid Username or Password!");
    }
    console.log("Submitted Data : ", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitFormData)}>
        <input type="text" placeholder="Username" {...register("username")} />
        <p className="error__msg">{errors.username?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className="error__msg">{errors.password?.message}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
