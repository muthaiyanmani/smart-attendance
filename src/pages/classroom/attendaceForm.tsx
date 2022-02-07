import React from "react";
import Sidebar from "../../components/global/sidebar";
import StudentList from "../../components/attendance/attendanceForm";

type Props = {};

const AtendaceForm = (props: Props) => {
  return (
    <Sidebar>
      <div className="flex  flex-col">
        <div className="flex mt-12 min-w-full sm:px-6 lg:px-8 justify-between">
          <div className="text-xl ">
            <h1>Mark your attendance</h1>
          </div>
        </div>
        <StudentList />
      </div>
    </Sidebar>
  );
};

export default AtendaceForm;
