import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submitForm = (data) => {
    // Save all user details to one localStorage array
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    // Redirect to home page
    navigate("/login");
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit(submitForm)}>
        <label>
          Name:
          <input type="text" name="name" {...register("name")} />
        </label>
        {errors.name && <p style={{ color: "red" }}>Name Required</p>}
        <label>
          Email:
          <input type="email" name="email" {...register("email", {})} />
        </label>
        {errors.email && <p style={{ color: "red" }}>Email Required</p>}
        <label>
          Password:
          <input
            {...register("password", {})}
            type="password"
            name="password"
          />
        </label>
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {})}
          />
        </label>
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
