import React from 'react';
import { useNavigate } from 'react-router-dom';
import {motion } from 'framer-motion'

const NotFound = () => {
    const navigate =useNavigate();
    function clickhandler()
    {
         
        navigate(`/`);
    }
  return (
    <div  className="fiction-section w-[75%] mx-auto lg:flex-row justify-center gap-7 md:flex-row sm:flex-col items-center lg:mt-[150px] sm:mt-[150px] md:mt-[200px] custom-media-query">
     <div className=' flex items-center justify-center flex-col gap-3'>
        <h1 className=' font-bold text-2xl text-red-600'>404 Not Found</h1>
      <motion.p
       initial={{x:'-100vw'}}
       animate={{x:0}}
      >The page you are looking for does not exist.</motion.p>
      <motion.div
       initial ={{y:-250}}
       animate ={{y:-10}}
      >
        <button onClick={clickhandler}>Home</button>
      </motion.div>
     </div>
    </div>
  );
};

export default NotFound;
