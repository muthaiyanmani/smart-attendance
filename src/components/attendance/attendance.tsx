import React from "react";
import Card from "../admissions/card";

type Props = {};

const Attendance = (props: Props) => {
  return (
    <div>
      <div className=" py-5">
        <h1 className="text-lg md:text-2xl">Attendance</h1>
        <p>Select your class and mark the attendance.</p>
      </div>
      <Card />
    </div>
  );
};

export default Attendance;
