import React from "react";
import StudentsList from "../../components/admissions/classList";
import Sidebar from "../../components/sidebar/sidebar";

type Props = {};

const ClassStudentsList = (props: Props) => {
  return (
    <Sidebar>
      <StudentsList />
    </Sidebar>
  );
};

export default ClassStudentsList;
