import React from 'react'
import topCategoriesData from '../components/topCategoriesData '
import './ImageMoveAnimation.css';
import { useNavigate } from 'react-router-dom';
import {motion } from 'framer-motion'
 

const Explore = () => {
    const navigate = useNavigate();
    function handleChange(name)
    {
  navigate(`/${name}`);
    }
  return (
    <div className=" w-[65%] fiction-section mx-auto   lg:mt-[150px] sm:mt-[150px] md:mt-[200px] custom-media-query">
        <div className=' my-5 '>
            <motion.h1 
            
          initial={{x:'-100vw'}}
          animate={{x:0}}
          transition={{type:"spring",  delay:1,stiffness:120,duration:0}}
          
            
            className=' font-bold lg:text-3xl md:text-2xl customcart bg-white rounded-full p-4 text-blue-500 text-center '> Explore various Top Categories </motion.h1>
        </div>
        <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
        
        className=' w-full flex  mx-auto  border-2  justify-between gap-5 hello rounded-xl lg:flex-row md:flex-col sm:flex-col explored mt-7'>
          <div className=' flex flex-col items-center justify-center     rounded-xl p-4'>
          <h1 className=' text-2xl font-bold text-green-500'>{topCategoriesData[0].name}</h1>
            <p className=' font-xl font-semibold opacity-60 py-3'>{topCategoriesData[0].description}</p>
         
                <button onClick={()=>handleChange(topCategoriesData[0].name)}>Discover  </button>
            
          </div>
         <div className=' w-[70%] h-[300px] image-container px-2 mx-auto'>
         <img  className=' rounded-xl moving-image' src={topCategoriesData[0].coverImage} alt={topCategoriesData} />
         </div>

        </motion.div>
        <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }} className=' w-full flex  mx-auto  border-2  justify-between gap-5 hello rounded-xl lg:flex-row md:flex-col sm:flex-col explored mt-7'>

        <div className=' w-[70%] h-[300px] image-container px-2 mx-auto '>
         <img  className=' rounded-xl moving-image    h-[80%]' src={topCategoriesData[1].coverImage} alt={topCategoriesData} />
         </div>
         
          <div className=' flex flex-col items-center justify-center     rounded-xl p-4'>
          <h1 className=' text-2xl font-bold text-green-500'>{topCategoriesData[1].name}</h1>
            <p className=' font-xl font-semibold opacity-60 py-3'>{topCategoriesData[1].description}</p>
         
            <motion.div
       initial ={{y:-350}}
       animate ={{y:-10}}
      >
           <button onClick={()=>handleChange(topCategoriesData[1].name)}>Discover</button>
           </motion.div>
            
          </div>
        

        </motion.div>
        <div className=' w-full flex  mx-auto  border-2  justify-between gap-5 hello rounded-xl lg:flex-row md:flex-col sm:flex-col explored mt-7'>
          <div className=' flex flex-col items-center justify-center     rounded-xl p-4'>
          <h1 className=' text-2xl font-bold text-green-500'>{topCategoriesData[2].name}</h1>
            <p className=' font-xl font-semibold opacity-60 py-3'>{topCategoriesData[2].description}</p>
         
            <button onClick={()=>handleChange(topCategoriesData[2].name)}>Discover</button>
            
          </div>
         <div className=' w-[70%] h-[300px] image-container px-2 mx-auto '>
         <img  className=' rounded-xl moving-image  h-[80%]' src={topCategoriesData[2].coverImage} alt={topCategoriesData} />
         </div>

        </div>
        <div className=' w-full flex  mx-auto  border-2  justify-between gap-5 hello rounded-xl lg:flex-row md:flex-col sm:flex-col explored mt-7'>

        <div className=' w-[70%] h-[300px] image-container px-2 mx-auto '>
         <img  className=' rounded-xl moving-image h-[80%]' src={topCategoriesData[3].coverImage} alt={topCategoriesData} />
         </div>
         
          <div className=' flex flex-col items-center justify-center     rounded-xl p-4'>
          <h1 className=' text-2xl font-bold text-green-500'>{topCategoriesData[3].name}</h1>
            <p className=' font-xl font-semibold opacity-60 py-3'>{topCategoriesData[3].description}</p>
         
            <button onClick={()=>handleChange(topCategoriesData[3].name)}>Discover</button>
            
          </div>
        

        </div>
        <div className=' w-full flex  mx-auto  border-2  justify-between gap-5 hello rounded-xl lg:flex-row md:flex-col sm:flex-col explored mt-7'>
          <div className=' flex flex-col items-center justify-center     rounded-xl p-4'>
          <h1 className=' text-2xl font-bold text-green-500'>{topCategoriesData[4].name}</h1>
            <p className=' font-xl font-semibold opacity-60 py-3'>{topCategoriesData[4].description}</p>
         
            <button onClick={()=>handleChange(topCategoriesData[4].name)}>Discover</button>
            
          </div>
         <div className=' w-[70%] h-[300px] image-container px-2 mx-auto '>
         <img  className=' rounded-xl moving-image  h-[80%]' src={topCategoriesData[4].coverImage} alt={topCategoriesData} />
         </div>

        </div>
        <div className=' w-full flex  mx-auto  border-2  justify-between gap-5 hello rounded-xl lg:flex-row md:flex-col sm:flex-col explored mt-7'>


<div className=' w-[70%] h-[300px] image-container px-2 mx-auto '>
 <img  className=' rounded-xl moving-image h-[80%]' src={topCategoriesData[5].coverImage} alt={topCategoriesData} />
 </div>
 
  <div className=' flex flex-col items-center justify-center     rounded-xl p-4'>
  <h1 className=' text-2xl font-bold text-green-500'>{topCategoriesData[5].name}</h1>
    <p className=' font-xl font-semibold opacity-60 py-3'>{topCategoriesData[5].description}</p>
 
    <button onClick={()=>handleChange(topCategoriesData[5].name)}>Discover</button>
    
  </div>


</div>

    </div>
  )
}

export default Explore
