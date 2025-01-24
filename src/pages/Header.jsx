// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Textbox from "../components/Textbox";
// import Button from "../components/Button";
// import { useSelector } from "react-redux";
import { motion } from "motion/react"
import Login from '../pages/Login'
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  // const closeLogin = () => {
  //   setShowLogin(True);
  // }


  // useEffect(() => {
  //   user && navigate("/dashboard");
  // }, [user]);

  return (

    <div className=" flex justify-between flex-col"
    
    >

      <div className="fixed min-h-full flex items-center flex-col p-12 top-0 list-none bg-blue-600 text-white rounded-sm justify-between"
      
      >

        <div className=" w-full space-y-8 mt-10 items-center">
          <h1 className='text-4xl font-bold text-red-600'>Sanchalak</h1>
          <ul className="space-x-10 items-center">
            <Link to="/home"> <li className="text-2xl gap-4">Home</li></Link>
            <Link to="/updates"> <li className="text-2xl gap-4">Updates</li></Link>
            <Link to="/pricing"><li className="text-2xl gap-4">Pricing</li></Link>
            <Link to="/thoughts"> <li className="text-2xl gap-4">Thoughts</li></Link>
          </ul>
        </div>

        <div className="flex items-center">
          <button onClick={toggleLogin} className="bg-white text-3xl text-black px-8 rounded-xl cursor-pointer hover:border border-red-800">Login</button>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative p-10 rounded-xl left-10">
          <Login toggleLogin={toggleLogin} />
          </div>
        </div>
      )}


      <div className='w-full min-h-screen flex items-center justify-center flex-row bg-black text-white'
      
        initial={{ opacity: 0, y: -20 }}
        animate={{ duration: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex items-center justify-center gap-5 md:gap-y-10 2xl:-mt-25'>


            <motion.p className=' gap-10  text-3xl md:text-4xl 2xl:text-5xl font-black text-center text-blue-700 mt-11 space-y-10'

            >
              <motion.span className="text-white
               6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}

              >One </motion.span>

              <motion.span className='text-red-600 text-5xl'
                initial={{ opacity: 0, y: -20 }}
                animate={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}
              >Platform , All Your Work </motion.span>


              <motion.span className='flex mt-5 gap-1 py-1 px-2 border rounded-full text-sm md:text-base border-red-600 text-white text-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Manage all your task in one place!
              </motion.span>

              <div>
                <p className="flex flex-col space-y-6">
                  <span className="text-xl text-white">Effortlessly Effortlessly manage your tasks and stay organized with our intuitive dashboard."</span>
                  <span className="text-xl text-white">"Collaborate seamlessly with your team and boost productivity."</span>
                  <span className="text-xl text-white">"Leverage AI to prioritize and automate your tasks efficiently."</span>
                  <span className="text-xl text-white">"Keep your workspace clutter-free with our smart trash management."</span>
                  {/* <span className="text-xl text-white">"Manage user roles and permissions with ease for better control."</span>
                  <span className="text-xl text-white">"Track your progress and achieve your goals with our comprehensive task management system."</span>
                  <span className="text-xl text-white">"Stay connected with your team and streamline communication."</span> */}
                  

                </p>

              {/* <img className='max-w-full h-auto' src="Heroo.png" alt="" /> */}

              </div>

            </motion.p>

          </div>
        </div>


      </div>


    </div>
  );
};

export default Header;
