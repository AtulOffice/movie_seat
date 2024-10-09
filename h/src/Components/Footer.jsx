// Footer.jsx
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      {/* Upper Section with Icons and CTA */}
      <div className="container mx-auto flex justify-between items-center pb-8">
        <div className="flex space-x-4 items-center">
          <Link to="/list-your-show" className="flex items-center space-x-2">
            <span className="text-white font-bold">List your Show</span>
            <p className="text-sm">
              Got a show, event, or activity? Get listed on BookMyShow.
            </p>
          </Link>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Contact Today
        </button>
      </div>

      {/* Lower Section with Links */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
          {/* Movies Showing Section */}
          <div>
            <h3 className="font-bold text-gray-400">MOVIES SHOWING IN</h3>
            <ul className="mt-4 space-y-1">
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Delhi</li>
              <li>Kolkata</li>
              <li>Hyderabad</li>
            </ul>
          </div>

          {/* Upcoming Movies Section */}
          <div>
            <h3 className="font-bold text-gray-400">UPCOMING MOVIES</h3>
            <ul className="mt-4 space-y-1">
              <li>Jawan</li>
              <li>Salaar</li>
              <li>Animal</li>
              <li>Dunki</li>
            </ul>
          </div>

          {/* Other sections */}
          <div>
            <h3 className="font-bold text-gray-400">EVENTS IN CITIES</h3>
            <ul className="mt-4 space-y-1">
              <li>Comedy Shows</li>
              <li>Live Events</li>
              <li>Theatre</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-400">COUNTRIES</h3>
            <ul className="mt-4 space-y-1">
              <li>India</li>
              <li>UAE</li>
              <li>Singapore</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-400">HELP</h3>
            <ul className="mt-4 space-y-1">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section with Social Media Icons */}
      <div className="container mx-auto pt-8 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2024 BookMyShow</p>
          <div className="flex space-x-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
