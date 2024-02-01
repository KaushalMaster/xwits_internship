import React from "react";
import ScheduleInputForm from "../ScheduleInputForm/ScheduleInputForm";
import ScheduleData from "../ScheduleData/ScheduleData";

const ScheduleInput = () => {
  const [data, setData] = React.useState({ schedules: [] });
  const handleSchedules = (schedule) => {
    console.log("Schedule in ScheduleInput.jsx");
    console.log(schedule);
    setData((prevData) => {
      const updatedSchedules = [...prevData.schedules, schedule];
      return { ...prevData, schedules: updatedSchedules };
    });
  };
  return (
    <>
      <div>
        <ScheduleInputForm data={handleSchedules} />
        {data.schedules.map((schedule, index) => (
          <ScheduleData key={index} schedules={schedule} />
        ))}
      </div>
    </>
  );
};

export default ScheduleInput;
