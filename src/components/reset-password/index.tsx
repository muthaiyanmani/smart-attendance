import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import { BASE_URL } from "../../config/settings";

export default function ResetComponent() {
  const [user, setUser] = useState({
    email: "",
    secretKey: "",
  });

  const showPassword = (e:any)=>{
    e.preventDefault();
    axios.post(`${BASE_URL}/getPassword`,user)
    .then(res=>{
      const resp = res.data;
      setUser({email:"",secretKey:""});
      swal(`Your password is : ${resp.message}`);
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
              Reset your password
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={showPassword}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <br />

              <div>
                <input
                  value={user.secretKey}
                  onChange={(e) =>
                    setUser({ ...user, secretKey: e.target.value })
                  }
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Secret Key"
                />
              </div>
            </div>

            <br />

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Show Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
