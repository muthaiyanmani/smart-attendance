import React from "react";
import Sidebar from "../../components/global/Sidebar";

type Props = {};

const ViewStudent = (props: Props) => {
  return (
    <Sidebar>
      <div className=" bg-white">
        <div className="py-10 px-4 sm:py-24  sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-10">
          <div className="lg:pr-8">
            <div className="">
              <h2 className="md:text-2xl font-mediumtracking-tight text-xl">
                View a Student
              </h2>
              <br />
              <div className="my-4">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 ">
                  <div className="space-y-6">
                    <div className="md:flex justify-between space-y-6 md:space-y-0">
                      <div className="md:w-8/12 mr-2">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <div className="mt-1">
                          <h1>Charles </h1>
                        </div>
                      </div>
                      <div className="md:w-4/12">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <div className="mt-1">
                          <h1>G</h1>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex justify-between space-y-4 md:space-y-0">
                      <div className="md:w-8/12 mr-2">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Class
                        </label>
                        <div className="mt-1">
                          <h1>VII - A</h1>
                        </div>
                      </div>
                      <div className="md:w-4/12">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Medium of Instruction
                        </label>
                        <div className="mt-1">
                          <h1>English</h1>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex justify-between space-y-4 md:space-y-0">
                      <div className="md:w-8/12 mr-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <h1>muthaiyanmani@outlook.com</h1>
                        </div>
                      </div>
                      <div className="md:w-4/12">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Contact No.
                        </label>
                        <div className="mt-1">
                          <h1>0987654321</h1>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date of Birth
                      </label>
                      <div className="mt-1">
                        <h1>06-06-2006</h1>
                      </div>
                    </div>

                    <div className="md:flex justify-between space-y-4 md:space-y-0">
                      <div className="md:w-8/12 mr-2">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Father's Name
                        </label>
                        <div className="mt-1">
                          <h1> Zukerberg</h1>
                        </div>
                      </div>
                      <div className="md:w-4/12">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Occupation
                        </label>
                        <div className="mt-1">
                          <h1>CEO of Meta</h1>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex justify-between space-y-4 md:space-y-0">
                      <div className="md:w-8/12 mr-2">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mother's Name
                        </label>
                        <div className="mt-1">
                          <h1>Testing</h1>
                        </div>
                      </div>
                      <div className="md:w-4/12">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Occupation
                        </label>
                        <div className="mt-1">
                          <h1>Housewife</h1>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Annual Income
                        <span className="text-red-600 mx-1">*</span>
                      </label>
                      <div className="mt-1">
                        <h1>60,00,000,000</h1>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="how-can-we-help"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Photo
                        </label>
                      </div>
                      <div className="my-2">
                        <img
                          className="w-32 h-32 rounded"
                          alt="student image"
                          src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="how-can-we-help"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                      </div>
                      <div className="mt-1">
                        <p>
                          123A, ABC Street,
                          <br /> GHD Village, ABC Town,
                          <br /> ABC District,
                          <br />
                          ABC State, 123456
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default ViewStudent;
