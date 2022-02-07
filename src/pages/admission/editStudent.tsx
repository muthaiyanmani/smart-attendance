import React from "react";
import StudentForm from "../../components/admissions/studentForm";
import Sidebar from "../../components/global/sidebar";

type Props = {};

const EditStudent = (props: Props) => {
  return (
    <Sidebar>
      <div className=" bg-white">
        <div className="py-10 px-4 sm:py-24  sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-10">
          <div className="lg:pr-8">
            <div className="">
              <h2 className="md:text-2xl font-mediumtracking-tight text-xl">
                Edit a Student
              </h2>

              <StudentForm />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default EditStudent;
