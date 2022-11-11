import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <div className="flex  justify-center items-center">
        <div className=" m-4 xl:mx-96 bg-white w-full rounded-xl  ">
          <div className="p-5 flex flex-col w-full items-center gap-3 text-primary tracking-wider">
            <div className=" font-bold text-3xl">Register Page</div>
            <div className="text-sm ">
              Hey, Enter your details to get sign up your account
            </div>
            <form className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="mb-4">
                  <label htmlFor="fullname">Fullname</label>
                  <input type="text" className=" w-full mt-1 rounded-lg " />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Email</label>
                  <input type="text" className=" w-full mt-1 rounded-lg " />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Password</label>
                  <input type="password" className="w-full mt-1 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Phone Number</label>
                  <input type="text" className=" w-full mt-1 rounded-lg " />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email">Address</label>
                <textarea className="w-full mt-1 rounded-lg"></textarea>
              </div>

              <button className="w-full mb-4 bg-primary py-2 px-3 text-white rounded-lg hover:bg-gray-600">
                Login
              </button>
              <div>
                Already have a acoount?{" "}
                <Link to={"/login"} className="underline hover:text-gray-500">
                  Login Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
