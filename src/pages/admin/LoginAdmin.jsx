import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin, reset } from "../../features/adminAuthSlice";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin, isError, isSuccess, isLoading } = useSelector(
    (state) => state.authAdmin
  );

  useEffect(() => {
    if (admin) {
      navigate("/admin");
    }
  }, [admin]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(loginAdmin({ email, password }));
  };
  return (
    <div className="bg-secondary h-screen">
      <div className="flex  justify-center items-center h-full">
        <div className=" mx-4 lg:mx-96 bg-white w-full rounded-xl  ">
          <div className="p-5 flex flex-col w-full items-center gap-3 text-primary tracking-wider">
            <div className=" font-bold text-3xl">Login Admin Page</div>
            <div className="text-sm ">
              Hey, Enter your details to get sign in to your account
            </div>
            <form className="py-4" onSubmit={Auth}>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className=" w-full mt-1 rounded-lg "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary py-2 px-3 text-white rounded-lg hover:bg-gray-600"
              >
                {isLoading ? "Loading.." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginAdmin;
