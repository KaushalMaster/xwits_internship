import React, { useState } from "react";
import "./AddMeals.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from "react-router-dom";

const AddMeals = () => {
  const navigate = useNavigate();
  const [usermeals, setUserMeals] = useState(
    JSON.parse(localStorage.getItem("user_Meals")) || []
  );
  const validationSchema = yup.object().shape({
    mealName: yup.string().required(),
    mealPrice: yup.string().required(),
    mealDescription: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addMeals = (data) => {
    console.log("Submitting Form", data);

    // Store the meals for the user who has logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedIn_user"));
    if (loggedInUser) {
      const userMeals =
        JSON.parse(localStorage.getItem(`user_Meals_${loggedInUser}`)) || [];
      userMeals.push(data);
      localStorage.setItem(
        `user_Meals_${loggedInUser}`,
        JSON.stringify(userMeals)
      );
      console.log(userMeals);
      setUserMeals((prevState) => [...prevState, data]);
      alert("Meal Added Successfully!");
      navigate("/");
    } else {
      alert("Please Login to add meals");
      navigate("/login");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(addMeals)}>
        <input type="text" placeholder="Meal Name" {...register("mealName")} />
        <p className="error__msg">{errors.mealName?.message}</p>
        <input
          type="text"
          placeholder="Meal Price"
          {...register("mealPrice")}
        />
        <p className="error__msg">{errors.mealPrice?.message}</p>
        <input
          type="text"
          placeholder="Meal Description"
          {...register("mealDescription")}
        />
        <p className="error__msg">{errors.mealDescription?.message}</p>

        {usermeals.map((meal, index) => {
          return (
            <div key={index}>
              <div>{meal.mealName}</div>
              <div>{meal.mealPrice}</div>
              <div>{meal.mealDescription}</div>
            </div>
          );
        })}

        <button type="submit">Add Meal</button>
      </form>
    </div>
  );
};

export default AddMeals;
