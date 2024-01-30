import React from "react";
import "./SignIn.css";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const formSubmitHandler = (data) => {
    console.log("Form Submitted");
    console.log(data);
  };

  return (
    <div className="signIn__form">
      <form action="#" onSubmit={handleSubmit(formSubmitHandler)}>
        <p>Sign Up</p>
        <input
          type="text"
          placeholder="Username"
          id="username"
          {...register("username")}
          required
        />
        <input
          type="text"
          placeholder="Enter Email"
          id="Email"
          {...register("Email")}
          required
        />
        <input
          type="text"
          placeholder="Enter Channel"
          id="Channel"
          {...register("Channel")}
          required
        />
        <input type="submit" className="btn" value="Sign In" />
        <a href="#">Forgot your password?</a>
        <a href="#">Sign Up</a>
      </form>
    </div>
  );
};

export default SignIn;
