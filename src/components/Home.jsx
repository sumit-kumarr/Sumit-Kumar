import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    
    <motion.div className='w-full min-h-screen bg-gray-600 flex items-center justify-center flex-row  text-white'
      
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

  
    </motion.div>

)
}
export default Home
