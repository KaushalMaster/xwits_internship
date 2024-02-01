import React from "react";
import "./ScheduleData.css";

const ScheduleData = (props) => {
  console.log(props.schedules);
  return (
    <>
      <div className="card__container">
        <div className="date">{props.schedules.date}</div>
        <div className="activity">{props.schedules.activity}</div>
        <div className="notes">{props.schedules.notes}</div>
      </div>
    </>
  );
};

export default ScheduleData;
