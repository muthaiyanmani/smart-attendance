import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/settings";

export default function SignInComponent() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const loginHandler = (e: any) => {
    e.preventDefault();
    navigate("/dashboard");
    // axios
    //   .post(`${BASE_URL}/signin`, user, { withCredentials: true })
    //   .then((res) => {
    //     setUser({ email: "", password: "" });
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     swal(`${err.response.data.message}`);
    //   });
  };
  return (
    <>
      <div className=" bg-white text-slate-900 h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col max-w-8xl md:px-10 lg:flex-row items-center justify-evenly">
          <div className="xl:pl-28">
            <h1 className="text-3xl md:text-5xl font-semibold ">
              Smart Attendance
            </h1>
            <div className="py-8 text-base  leading-7 hidden lg:inline-block space-y-6 ">
              <p className="w-5/6 text-xl">
                Smart attendance is a online based student attendance management
                application that helps teacher to manage students attendance
                easily.
              </p>
              <ul className="space-y-4 text-md font-medium">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">Real-time tracking</p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">Decreased errors</p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">Manage of enormous data</p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">Daily Reports</p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4"> Reliable Accuracy</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-slate-800 rounded-lg px-8 md:px-16 w-full py-4 md:py-12 max-w-md space-y-8">
              <div>
                <h2 className="mt-6 text-2xl font-medium text-center text-white">
                  Sign in to your account
                </h2>
              </div>
              <br />
              <form className="mt-8 space-y-6" onSubmit={loginHandler}>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      className="relative block w-full lg:w-80 px-3 h-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <br />
                  <div>
                    <input
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      className="relative block w-full px-3 h-10 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center"></div>

                  <div className="text-sm">
                    <button
                      onClick={() => alert("Contact Administrator")}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
