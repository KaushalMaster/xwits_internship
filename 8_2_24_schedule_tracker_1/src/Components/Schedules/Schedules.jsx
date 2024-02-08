import React from "react";
import "./Schedules.css";

const Schedule = (props) => {
  const Schedule = props.Schedule;
  return (
    <div className="schedule__container">
      {Schedule.map((data) => {
        return (
          <table>
            <div key={data.id} className="form__data">
              {/* <h2>Form Data</h2> */}
              {/* <div>
              <strong>Date:</strong> {data.date}
            </div>
            <div>
              <strong>Activity Name:</strong> {data.activityName}
            </div>
            <div>
              <strong>Description:</strong> {data.description}
            </div> */}
              <tr>
                <td>{data.date}</td>
                <td>{data.activityName}</td>
                <td>{data.description}</td>
              </tr>
            </div>
          </table>
        );
      })}
    </div>
  );
};

export default Schedule;
