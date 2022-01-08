import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { BASE_URL } from "../../config/settings";

export default function SignUpComponent() {

  const [user,setUser] = useState({
    email:"",
    password:"",
    secretKey:""
  })

  const createUser = (e:any) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/signup`,user)
      .then(res=>{
        const resp = res.data;
        setUser({email:"",password:"",secretKey:""});
        swal(resp.message);

      })
      .catch((err)=>{
        swal(`${err.response.data.message}`)
      })
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Sign up to your account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Already have an account?{"  "}
              <Link
                to="/signin"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={createUser}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
               
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={(e)=>setUser({...user,email:e.target.value})}
                  value={user.email}
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  onChange={(e)=>setUser({...user,password:e.target.value})}
                  value={user.password}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <br />
              <div>
                <input
                  name="secretKey"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e)=>setUser({...user,secretKey:e.target.value})}
                  value={user.secretKey}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Secret Key"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                <Link
                  to={"/reset"}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
