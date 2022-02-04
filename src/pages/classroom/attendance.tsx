import React from "react";
import Attendance from "../../components/attendance/attendance";
import Sidebar from "../../components/sidebar/sidebar";

type Props = {};

const Classroom = (props: Props) => {
  return (
    <Sidebar>
      <Attendance />
    </Sidebar>
  );
};

export default Classroom;
