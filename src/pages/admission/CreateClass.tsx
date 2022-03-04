import React from "react";
import AddClass from "../../components/pages/admissions/AddClassForm";
import Sidebar from "../../components/global/Sidebar";
import AddClassForm from "../../components/pages/admissions/AddClassForm";

type Props = {};

const CreateClass = (props: Props) => {
  return (
    <Sidebar>
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <div className="">
            <h2 className="md:text-2xl font-medium tracking-tight text-gray-900 text-lg">
              Add New Class
            </h2>
          </div>
          <div className="mt-12">
            <AddClassForm />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default CreateClass;
