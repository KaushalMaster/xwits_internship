import React, { useEffect, useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const user = props.user;
  const { register, handleSubmit, reset } = useForm();
  const [userSchedules, setUserSchedules] = useState([]);

  // Fetching the schedules from the local storage
  useEffect(() => {
    const schedules = JSON.parse(localStorage.getItem("schedules"));

    if (schedules && schedules.length > 0 && user) {
      setUserSchedules(schedules?.filter((schedule) => schedule.user === user));
    }
  }, [user]);

  const submitData = (data) => {
    setUserSchedules([data, ...userSchedules]); // Add new schedule to the array

    localStorage.setItem("schedules", JSON.stringify(userSchedules)); // Save the schedules to local storage

    // Saving the schedules according to the user
    if (
      user &&
      userSchedules &&
      userSchedules.length > 0 &&
      userSchedules[0].user !== user
    ) {
      const userSchedulesCopy = userSchedules;
      userSchedulesCopy[0].user = user;
      localStorage.setItem("schedules", JSON.stringify(userSchedulesCopy));
    }
    reset(); // Reset the form after submission
  };

  return (
    <>
      <div className="form__container">
        <form onSubmit={handleSubmit(submitData)}>
          <h2>Schedule Form</h2>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              {...register("date", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="activityName">Activity Name:</label>
            <input
              type="text"
              id="activityName"
              {...register("activity", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" {...register("description")} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {userSchedules.map((schedule, index) => (
          <div key={index}>
            <h3>{schedule.activity}</h3>
            <p>{schedule.date}</p>
            <p>{schedule.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
