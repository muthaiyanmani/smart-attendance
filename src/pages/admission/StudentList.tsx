import React from "react";
import { Link, useParams } from "react-router-dom";
import StudentsList from "../../components/global/StudentList";
import Sidebar from "../../components/global/Sidebar";

type Props = {};

const StudentList = (props: Props) => {
  const params = useParams();

  return (
    <Sidebar>
      {" "}
      <div className="flex  flex-col">
        <div className="flex mt-12 min-w-full sm:px-6 lg:px-8 justify-between">
          <div className="text-xl ">
            <h1>Students list</h1>
          </div>
          <div>
            <Link
              to={`/dashboard/admissions/${params.class}/new`}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Student
            </Link>
          </div>
        </div>
        <StudentsList />
      </div>
    </Sidebar>
  );
};

export default StudentList;
