import React, { useEffect, useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DateTime } from "luxon"; // Using luxon library for date manipulation

const schema = yup.object().shape({
  date: yup.string().required(),
  activity: yup.string().required(),
  description: yup.string(),
  filter: yup.string(),
});

const Form = (props) => {
  const user = props.user;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [userSchedules, setUserSchedules] = useState([]);

  // Fetching the schedules from the local storage
  useEffect(() => {
    const schedules = JSON.parse(localStorage.getItem("schedules"));

    if (schedules && schedules.length > 0 && user) {
      setUserSchedules(schedules);
    }
  }, [user]);

  const submitData = (data) => {
    setUserSchedules((prev) => {
      localStorage.setItem(
        "schedules",
        JSON.stringify([
          {
            ...data,
            user,
          },
          ...prev,
        ])
      ); // Save the schedules to local storage

      return [
        {
          ...data,
          user,
        },
        ...prev,
      ];
    });

    reset(); // Reset the form after submission
  };

  const sortSchedules = (sort) => {
    const sortedSchedules = [...userSchedules].sort((a, b) => {
      const dateA = DateTime.fromISO(a.date);
      const dateB = DateTime.fromISO(b.date);

      console.log(dateA);
      console.log(dateB);

      if (sort === "days") {
        return dateA.diff(dateB, "days").days;
      } else if (sort === "weeks") {
        return dateA.diff(dateB, "weeks").weeks;
      } else if (sort === "months") {
        return dateA.diff(dateB, "months").months;
      } else if (sort === "years") {
        return dateA.diff(dateB, "years").years;
      }
    });

    setUserSchedules(sortedSchedules);
  };

  return (
    <>
      <div className="form__container">
        <form onSubmit={handleSubmit(submitData)}>
          <h2>Add Schedule</h2>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              {...register("date")}
              className="input__field"
            />
          </div>
          {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}
          <div>
            <label htmlFor="activityName">Activity Name:</label>
            <input
              type="text"
              id="activityName"
              {...register("activity")}
              className="input__field"
            />
          </div>
          {errors.activity && (
            <p style={{ color: "red" }}>{errors.activity.message}</p>
          )}
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              {...register("description")}
              className="input__field"
            />
          </div>

          <button className="submit__btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      {/* Filter Schedules */}
      <div className="filter__schedules">
        {/* Filtering schedule based on days, weeks, month and years */}
        <h3>Sort By:</h3>

        <button onClick={() => sortSchedules("days")}> Days</button>
        <button onClick={() => sortSchedules("weeks")}> Weeks</button>
        <button onClick={() => sortSchedules("months")}> Months</button>
        <button onClick={() => sortSchedules("years")}> Years</button>
      </div>
      <div className="schedules__card">
        {userSchedules
          .filter((itm) => itm.user === user)
          .map((schedule, index) => (
            <div key={index}>
              <h3>Activity: {schedule.activity}</h3>
              <h5>Date: {schedule.date}</h5>
              <h5>Description: {schedule.description}</h5>
            </div>
          ))}
      </div>
    </>
  );
};

export default Form;
