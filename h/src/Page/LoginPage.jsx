import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInFailure,
  signInSucess,
  signInStart,
} from "../redux/user/userSlice";
import OAuth from "../Components/OAuth";

const loginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = (e) => {
    e.preventDefault();
    try {
      const result = axios.post("http://localhost:5000/api/v1/auth/login", {
        email,
        password,
      });

      if (result.status === 200) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify({ email }));
        toast.success(" Successfully Login");
        dispatch(signInSucess({ email }));
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      dispatch(signInFailure(error.response?.data || "Login failed"));

      toast.error(
        "Login failed: " + (error.response?.data.message || error.message)
      );
    }
  };

  return (
    <div>
      <div className="h-screen w-full hero-bg">
        <div className="flex justify-center items-center mt-20 mx-3">
          <div className="w-full max-w-md p-8 space-y-6  rounded-lg shadow-md">
            <h1 className="text-center text-black text-2xl font-bold mb-4">
              Log In
            </h1>

            <form className="space-y-4" onSubmit={handlelogin}>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-black block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent  text-black focus:outline-none focus:ring"
                  placeholder="you@example.com"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-black block">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent  text-black focus:outline-none focus:ring"
                  placeholder="••••••••"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="w-full py-2 bg-white  text-black font-semibold rounded-md border border-gray-700
						
						"
                onClick={handlelogin}>
                Login
              </button>
            </form>
            <div className=" h-0.5 bg-black mx-2"></div>
            <OAuth />
            <div className="text-center text-black">
              Don't Have Account?
              <Link to={"/signup"} className="text-black   hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
