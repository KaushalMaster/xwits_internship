import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitForm = (data) => {
    console.log(data);
    // Save user details to localStorage
    localStorage.setItem("user", JSON.stringify(data));
    // Redirect to home page
    navigate("/login");
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit(submitForm)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            {...register("name", { required: "Username is Requireed" })}
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>Name Required</p>}
        <label>
          Email:
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email Required",
              pattern: /^\S+@\S+$/i,
              // validate: (value) => {
              //   return value.includes("@") || "Email must contain @ and .com";
              // },
            })}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>Email Required</p>}
        <label>
          Password:
          <input
            {...register("password", {
              required: "Password Required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              // validate: (value) => {
              //   return (
              //     [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
              //       pattern.test(value)
              //     ) ||
              //     "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special character"
              //   );
              // },
            })}
            type="password"
            name="password"
          />
        </label>
        {errors.password && <p style={{ color: "red" }}> Password Required</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
