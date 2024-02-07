// Form.js
import React, { useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [formData, setFormData] = useState({
    date: "",
    activityName: "",
    description: "",
  });

  const [Schedule, setExsistingSchedule] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSchedule = {
      id: uuidv4(),
      date: formData.date,
      activityName: formData.activityName,
      description: formData.description,
    };

    // Fetch existing schedule data from localStorage or initialize an empty array
    const existingSchedule =
      JSON.parse(localStorage.getItem("scheduleData")) || [];

    setExsistingSchedule(existingSchedule);

    // Add the new schedule to the existing schedule data
    const updatedSchedule = [...existingSchedule, newSchedule];

    // Save the updated schedule data back to localStorage
    localStorage.setItem("scheduleData", JSON.stringify(updatedSchedule));

    // Clear the form data
    setFormData({
      date: "",
      activityName: "",
      description: "",
    });
  };

  return (
    <>
      <div className="form__container">
        <h1>Add Schedule</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Select Date"
            required
          />
          <input
            type="text"
            name="activityName"
            value={formData.activityName}
            onChange={handleChange}
            placeholder="Activity Name"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="description"
          ></textarea>
          <input type="submit" value="Submit" className="submit__btn" />
        </form>
      </div>
      {formData.date && formData.activityName && formData.description && (
        <p className="success__msg">Schedule added successfully!</p>
      )}
      {Schedule.map((data) => {
        return (
          <div key={data.id} className="form__data">
            <h2>Form Data</h2>
            <p>
              <strong>Date:</strong> {data.date}
            </p>
            <p>
              <strong>Activity Name:</strong> {data.activityName}
            </p>
            <p>
              <strong>Description:</strong> {data.description}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Form;
