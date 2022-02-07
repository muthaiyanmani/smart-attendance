import { EyeIcon, PencilAltIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const AtendanceForm = (props: Props) => {
  const people = [
    {
      name: "Jane Cooper",
      class: "CSE I",
      dob: "01-01-2000",
      mobile: "0987654321",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },

    {
      name: "Jane Cooper",
      class: "CSE I",
      dob: "01-01-2000",
      mobile: "0987654321",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jane Cooper",
      class: "CSE I",
      dob: "01-01-2000",
      mobile: "0987654321",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jane Cooper",
      class: "CSE I",
      dob: "01-01-2000",
      mobile: "0987654321",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];

  return (
    <div className=" overflow-x-auto ">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow mt-10 overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fore Noon
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  After Noon
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {people.map((person) => (
                <tr key={person.email}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={person.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {person.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {person.class}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 space-x-10 whitespace-nowrap">
                    <div className=" text-sm flex space-x-10">
                      <div className="">
                        {" "}
                        <input
                          type="radio"
                          id="present"
                          name="attendance"
                          value="Present"
                        />
                          <label htmlFor="present">PRE</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="absent"
                          name="attendance"
                          value="Absent"
                        />
                          <label htmlFor="absent">AB</label>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex text-sm space-x-10">
                      <div className="">
                        {" "}
                        <input
                          type="radio"
                          id="present"
                          name="attendance"
                          value="Present"
                        />
                          <label htmlFor="present">PRE</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="absent"
                          name="attendance"
                          value="Absent"
                        />
                          <label htmlFor="absent">AB</label>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="my-2 flex justify-end">
          <div>
            <button className="rounded bg-blue-800 hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed text-white w-28 h-10 text-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtendanceForm;
