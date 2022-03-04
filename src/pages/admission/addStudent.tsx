import React from "react";
import AddStudentForm from "../../components/pages/admissions/StudentForm";

import Sidebar from "../../components/global/Sidebar";

type Props = {};

const AddNewStudent = (props: Props) => {
  return (
    <Sidebar>
      <div className=" bg-white">
        <div className="py-10 px-4 sm:py-24  sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-10">
          <div className="lg:pr-8">
            <div className="">
              <h2 className="md:text-2xl font-mediumtracking-tight text-xl">
                Add a Student
              </h2>

              <AddStudentForm />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default AddNewStudent;
