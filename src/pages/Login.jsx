import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash, FaEnvelope, FaUser, FaLock } from 'react-icons/fa';
import Textbox from '../components/Textbox'; // Adjust the import path as necessary
import Button from '../components/Button'; // Adjust the import path as necessary
import { useSelector } from 'react-redux';

const Login = ({ toggleLogin }) => {
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = async (data) => {
    console.log("submit");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <motion.div className='relative w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center mt-5 md:mt-0'
      transition={{ type: "spring" }} animate={{ scale: 1.2 }}
    >
      <button onClick={toggleLogin} className="absolute top-1 right-0 bg-red-500 text-white px-4 py-2 rounded-full">X</button>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-blue-600 px-10 pt-14 pb-14'
        transition={{ type: "spring" }} animate={{ scale: 1.2 }}
      >
        <div className=''>
          <motion.p className='text-red-600 text-3xl font-bold text-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Sanchalak
          </motion.p>
          <p className='text-center text-base text-white mt-7 '>
            Keep all your credential safe.
          </p>
        </div>

        <div className='flex flex-col gap-y-6 '>
          {!isLogin && (
            <div className='relative gap-y-5'>
              <label className='text-white mb-2'>Full Name</label>
              <Textbox
                placeholder='Full Name'
                type='text'
                name='fullName'
                className='w-full rounded-full outline-none p-3 text-black placeholder-gray-500'
                register={register("fullName", {
                  required: "Full Name is required!",
                })}
                error={errors.fullName ? errors.fullName.message : ""}
              />
              <FaUser className='absolute left-3 top-7 text-gray-500' />
            </div>
          )}

          <div className='relative'>
            <label className='text-white mb-2'>Email Address</label>
            <Textbox
              placeholder='email@example.com'
              type='email'
              name='email'
              className='w-full rounded-full outline-none p-3 text-black placeholder-gray-500'
              register={register("email", {
                required: "Email Address is required!",
              })}
              error={errors.email ? errors.email.message : ""}
            />
            <FaEnvelope className='absolute left-3 top-3 text-gray-500' />
          </div>

          <div className='relative'>
            <label className='text-white mb-2'>Password</label>
            <Textbox
              placeholder='your password'
              type={showPassword ? 'text' : 'password'}
              name='password'
              className='w-full rounded-full outline-none p-3 text-black placeholder-gray-500'
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password.message : ""}
            />
            <FaLock className='absolute left-3 top-3 text-gray-500' />
            <span onClick={togglePasswordVisibility} className='absolute right-3 top-3 cursor-pointer'>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
            Forget Password?
          </span>

          <Button
            type='submit'
            label={isLogin ? 'Login' : 'Sign Up'}
            className='w-full h-10 bg-blue-700 text-white rounded-full hover:bg-rose-600 font-bold hover:text-black'
          />

          <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer' onClick={toggleForm}>
            {isLogin ? 'Create Account' : 'Already have an account? Login'}
          </span>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;








// import { useState, useEffect, useContext } from 'react'
// // import { assets } from '../assets/assets'
// import { AppContext } from '../components/Context/AppContext'
// import { FaTimes } from 'react-icons/fa'

// const Login = () => {
//   const [state, setState] = useState('Login')
//   const { setShowLogin } = useContext(AppContext)

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'unset';
//     }
//   }, [])

//   return (
//     <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
//       <form className='relative bg-white p-10 rounded-lg text-slate-500 ml-5 mr-5 md:ml-0 md:mr-0'>
//         <h1 className='text-center text-3xl text-neutral-700 font-bold '>{state}</h1>
//         <p className='text-center mb-5 text-sm'>Welcome Back ! Please Sign in to Continue</p>

//         {state !== 'Login' &&
//           <div className='border px-6 py-3 flex items-center gap-2 rounded-full mt-5'>
//             {/* <img  className='w-8 h-8' src={assets.profile_icon} alt="" /> */}
//             <input className='outline-none flex-1' type="text" placeholder='Full Name' required />
//           </div>
//         }

//         <div className='border px-6 py-2 flex items-center gap-3 rounded-full mt-5'>
//           {/* <img  className='w-5 h-8' src={assets.email_icon} alt="" /> */}
//           <input className='outline-none flex-1' type="email" placeholder='Enter Your Email' required />
//         </div>

//         <div className='border px-6 py-2 flex items-center gap-3 rounded-full mt-5'>
//           {/* <img  className='w-4 h-8' src={assets.lock_icon} alt="" /> */}
//           <input className='outline-none flex-1' type="password" placeholder='Enter Password' required />
//         </div>

//         <p className='text-sm text-blue-600 cursor-pointer my-4 mt-5'>Forget Password</p>
//         <button className='bg-blue-600 text-white w-full py-2 rounded-full hover'>{state === 'Login' ? 'Login' : 'create account'}</button>

//         {state === 'Login' ?
//           <p className='text-sm text-center mt-5'>Dont Have An Account?  <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p> :
//           <p className='text-sm text-center mt-5'>Already Have An Account?  <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Log In</span></p>
//         }

//         <FaTimes onClick={() => setShowLogin(false)} className="absolute top-5 right-5 cursor-pointer" size={20} />
//       </form>
//     </div>
//   )
// }

// export default Login
