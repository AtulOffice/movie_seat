import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Dropdown } from "flowbite-react";
import { logoutSuccess } from "../redux/user/userSlice";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  });

  const handleSignout = () => {
    try {
      const res = axios.post("http://localhost:5000/api/v1/auth/logout");
      dispatch(logoutSuccess(null));
      navigate("/signup");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <header
        className="w-full p-4 bg-gray-100
     shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <div className="text-red-600 text-3xl font-bold">
                <img
                  src="/bookmyshow.png"
                  alt=""
                  height={"75"}
                  width={"150"}
                  className="bg-black border-0"
                />
              </div>
            </Link>
          </div>

          {/* Middle Section: Search Bar */}
          <div className="hidden md:flex items-center flex-1 mx-4">
            <div className="relative w-4/6 border-gray-200">
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:shadow"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-600" />
              </div>
            </div>
          </div>

          {/* Right Section: Location, Sign In, and Menu */}
          <div className="flex items-center space-x-6">
            {/* Location */}
            <div className="hidden md:flex items-center text-gray-600 cursor-pointer ">
              <select id="cities" name="cities" className=" border-0">
                <option value="Bengaluru">Popular Cities</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi NCR</option>
                <option value="Bengaluru">Hyderabad</option>
                <option value="Mumbai">Chandigarh</option>
                <option value="Delhi">Pune</option>
              </select>
            </div>

            {currentUser ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="user"
                    img={currentUser.profilePicture}
                    rounded
                    status="online"
                    className="w-10 h-15"
                  />
                }>
                <Dropdown.Header>
                  <span className="block text-sm font-medium truncate">
                    {currentUser.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout} className="rounded-lg">
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Button
                className="bg-red-500 text-white  rounded-full h-115"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            )}

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <FiMenu className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
