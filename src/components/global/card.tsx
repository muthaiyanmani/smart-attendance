/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon } from "@heroicons/react/outline";
import { MailIcon, PhoneIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const people = [
  {
    class: "CSE",
    teacher: "Mr. Test",
    route: "cse",
  },
  // {
  //   class: "CSE",
  //   teacher: "Mr. Test",
  //   route: "cse",
  // },
  {
    class: "CSE",
    teacher: "Mr. Test",
    route: "cse",
  },
  {
    class: "CSE",
    teacher: "Mr. Test",
    route: "cse",
  },
  {
    class: "ECE",
    teacher: "Mr. Test",
    route: "eee",
  },
  {
    class: "CSE",
    teacher: "Mrs. Abcd",
    route: "cse",
  },
];

type Props = {
  addNewCard?: boolean;
  route: string;
};

export default function Card({ addNewCard = false, route }: Props) {
  return (
    <ul className="grid grid-cols-1 px-3 md:px-1 my-5 gap-5 md:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((item, index) => (
        <li
          key={index}
          className="col-span-1  hover:scale-105 transition-all flex flex-col text-center  border border-gray-300 rounded-lg shadow divide-y divide-gray-200"
        >
          <Link
            to={`/dashboard/${route}/${item.route}`}
            className="flex-1 flex flex-col p-8"
          >
            <h3 className="mt-4  text-sm font-medium">Class: {item.class}</h3>
            <h3 className="mt-6  text-xs font-medium">
              Teacher: {item.teacher}
            </h3>
            <h3 className="mt-2 text-xs font-medium">Total Students: 50</h3>
          </Link>
        </li>
      ))}

      {addNewCard && (
        <li className="col-span-1 hover:scale-105 transition-all flex flex-col text-center bg-white border border-gray-300 rounded-lg shadow divide-y divide-gray-200">
          <Link
            to={`/dashboard/admissions/new`}
            className="flex-1 flex flex-col p-8"
          >
            <div className="mt-6 flex text-gray-900 text-center justify-center text-sm font-medium">
              <PlusIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              Add a new class
            </h3>
          </Link>
        </li>
      )}
    </ul>
  );
}
