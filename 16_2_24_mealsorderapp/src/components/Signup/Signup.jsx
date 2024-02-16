import React from "react";
import "./Signup.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Must Match"),
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
    console.log("Submitted Data : ", data);
    //   Store multiple users in the localstorage on signup
    const users = JSON.parse(localStorage.getItem("Registered__users")) || [];
    users.push(data);
    localStorage.setItem("Registered__users", JSON.stringify(users));
    alert("User Registered Successfully!");

    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitFormData)}>
        <input type="text" placeholder="Username" {...register("username")} />
        <p className="error__msg">{errors.username?.message}</p>
        <input type="email" placeholder="Email" {...register("email")} />
        <p className="error__msg">{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className="error__msg">{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p className="error__msg">{errors.confirmPassword?.message}</p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
