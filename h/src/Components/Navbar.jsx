import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // For menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 shadow-lg border-t-2">
      <div className="container mx-auto px-4 py-3 md:flex md:justify-between items-center">
    
        <div className="hidden md:flex space-x-6 font-bold">
          <Link to="/all-movie" className="text-gray-700 hover:text-red-500">
            Movies
          </Link>
          <Link to="/stream" className="text-gray-700 hover:text-red-500">
            Stream
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-red-500">
            Events
          </Link>
          <Link to="/plays" className="text-gray-700 hover:text-red-500">
            Plays
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 font-bold">
          <Link
            to="/list-your-show"
            className="text-gray-700 hover:text-red-500">
            List Your Show
          </Link>
          <Link to="/corporates" className="text-gray-700 hover:text-red-500">
            Corporates
          </Link>
          <Link to="/offers" className="text-gray-700 hover:text-red-500">
            Offers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
