import React from "react";
import "./ScheduleInputForm.css";
import Calendar from "react-calendar";

const ScheduleInputForm = (props) => {
  const minDate = "2024-01-25";
  const maxDate = "2024-07-25";

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const activity = form.activity.value;
    const notes = form.notes.value;
    const schedule = {
      date,
      activity,
      notes,
    };
    console.log(schedule);

    //   Sending the data to the parent component to print the schedule
    props.data(schedule);

    //empty the input field
    form.date.value = "";
    form.activity.value = "";
    form.notes.value = "";
  };

  return (
    <form action="#" onSubmit={formSubmitHandler}>
      <div className="form__container">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" min={minDate} max={maxDate} />
        <label htmlFor="activity">Activity:</label>
        <input type="text" id="activity" name="activity" />
        <label htmlFor="notes">Notes:</label>
        <input type="text" id="notes" name="notes" />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default ScheduleInputForm;
