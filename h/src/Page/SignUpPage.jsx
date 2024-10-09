import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { RxCross1 } from "react-icons/rx";

import OAuth from "../Components/OAuth";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const result = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      toast.success("user created successfully");

      navigate("/login");

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-full hero-bg">
      <div className="flex justify-center items-center mt-20 mx-2">
        <div className=" max-w-sm p-2 space-y-2  rounded-lg ">
          <button
            className="absolute px-72 text-black "
            onClick={() => navigate("/")}>
            <RxCross1 size={24} />
          </button>
          <div className="flex justify-center">
            <h1 className="text-center text-black text-2xl font-bold mb-4">
              Sign Up
            </h1>
          </div>

          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-black block">
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-black focus:outline-none focus:ring"
                placeholder="johndoe"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
              className="w-full py-2 bg-white  text-black font-bold rounded-md  border border-gray-700
						
						"
              disabled={loading}
              onClick={handleSignUp}>
              Sign Up
            </button>
            <div className=" h-0.5 bg-black mx-2"></div>
            <OAuth />
            <div className="text-center text-black">
              Already a member?{" "}
              <Link to={"/login"} className="text-black hover:underline">
                login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
