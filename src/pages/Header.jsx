// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Textbox from "../components/Textbox";
// import Button from "../components/Button";
// import { useSelector } from "react-redux";
// import { motion } from "motion/react"
// import Login from '../pages/Login'
// import { useState} from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showLogin, setShowLogin] = useState(false);
  

//   const toggleLogin = () => {
//     setShowLogin(!showLogin);
//   };

  // const closeLogin = () => {
  //   setShowLogin(True);
  // }


  // useEffect(() => {
  //   user && navigate("/dashboard");
  // }, [user]);

import { motion } from "motion/react";
import Login from '../pages/Login';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRegNewspaper, FaDollarSign, FaLightbulb, FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  // const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex justify-between flex-col bg-black">
      <div className="fixed min-h-full flex items-center flex-col p-12 top-0 list-none bg-blue-600 text-white rounded-sm justify-between">
        {/* <button onClick={toggleSidebar} className="text-3xl">
          {sidebarVisible ? <FaTimes /> : <FaBars />} */}
        {/* </button> */}
        {/* {sidebarVisible && ( */}
          <div className="w-full space-y-8 mt-10 items-center">
            <h1 className='text-4xl font-bold text-red-600'>Sanchalak</h1>
            <ul className="space-x-10 items-center">
              <Link to="/home">
                <li className="text-2xl gap-4 flex items-center">
                  <FaHome className="mr-2" /> Home
                </li>
              </Link>
              <Link to="/updates">
                <li className="text-2xl gap-4 flex items-center">
                  <FaRegNewspaper className="mr-2" /> Updates
                </li>
              </Link>
              <Link to="/pricing">
                <li className="text-2xl gap-4 flex items-center">
                  <FaDollarSign className="mr-2" /> Pricing
                </li>
              </Link>
              <Link to="/thoughts">
                <li className="text-2xl gap-4 flex items-center">
                  <FaLightbulb className="mr-2" /> Thoughts
                </li>
              </Link>
            </ul>
          </div>
        {/* )} */}
        <div className="flex items-center">
          <button onClick={toggleLogin} className="bg-white text-3xl text-black px-8 rounded-xl cursor-pointer hover:border border-red-800 flex items-center">
            <FaSignInAlt className="mr-2" /> Login
          </button>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative p-10 rounded-xl left-10">
            <Login toggleLogin={toggleLogin} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;