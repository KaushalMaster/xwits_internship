import React, { useState } from "react";
import "./SignIn.css";
import { useForm } from "react-hook-form";
import Onboarding from "../OnBoardingPage/Onboarding";

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [channel, setChannel] = useState("");

  const { errors } = formState;

  const formSubmitHandler = (data) => {
    console.log("Form Submitted");
    setUserName(data.username);
    setEmail(data.Email);
    setChannel(data.Channel);

    console.log(data.username);
    console.log(data.Email);
    console.log(data.Channel);
  };

  return (
    <>
      {!username ? (
        <div className="signIn__form">
          <form
            action="#"
            onSubmit={handleSubmit(formSubmitHandler)}
            noValidate
          >
            <p>Sign Up</p>
            <div>
              <input
                type="text"
                placeholder="Username"
                id="username"
                {...register("username", {
                  required: "Username Required",
                })}
                required
              />
              <p className="error">{errors.username?.message}</p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                {...register("Email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email",
                  },
                  required: true,
                })}
                required
              />
              <p className="error">{errors.email?.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Channel"
                id="Channel"
                {...register("Channel", {
                  required: "Channel Required",
                })}
                required
              />
              <p className="error">{errors.Channel?.message}</p>
            </div>
            <input type="submit" className="btn" value="Sign In" />
            <a href="#">Forgot your password?</a>
            <a href="#">Sign Up</a>
          </form>
        </div>
      ) : (
        <Onboarding user_name={username} email={email} channel={channel} />
      )}
    </>
  );
};

export default SignIn;
