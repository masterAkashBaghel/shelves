import React from "react";
import img from "../assets/about.jpg";
import Footer from "../pages/Footer";
import {motion } from 'framer-motion'

const About = () => {
  const clickhandler = () => {
     
    window.location.href = 'https://github.com/masterAkashBaghel';
  };
  return (
  <motion.div
  initial={{x:'100vw'}}
  animate={{x:0}}
  transition={{delay:1, type:'spring'}}
  >
      <div className="fiction-section w-[75%] mx-auto   justify-center gap-7  items-center lg:mt-[150px] sm:mt-[150px] md:mt-[200px] custom-media-query  rounded-md flex   h-auto bg-white  hello lg:flex-row md:flex-col sm:flex-col aboutse">
        <div className=" w-[50%] ">
            <img src={img} alt ="about"></img>
        </div>
  
        <div className="w-full md:w-[90%] flex flex-col justify-center    rounded-lg  p-2 px-4">
          <h1 className="font-bold text-2xl text-center mb-1  text-green-400">ABOUT</h1>
          <div className=" h-[2px] w-[50%] bg-blue-500 mx-auto m-1">

          </div>
          <p className=" font-semibold opacity-60">
            Welcome to our Bookshelf Web App! This application is built using
            React.js and utilizes the Google Books API to bring you an exciting
            collection of books across various genres.
          </p>
          <p className=" font-semibold opacity-60">
            With Bookshelf, you can explore top fiction, romance, drama,
            mystery, fantasy, comedy, and other genres to discover captivating
            stories and immerse yourself in the world of literature.
          </p>
          <p className=" font-semibold opacity-60">
            Whether you're a book enthusiast or looking for your next reading
            adventure, our app makes it easy to search, find, and learn more
            about your favorite books. Happy reading!
            </p>

        <div className=" flex items-center ">
        <button onClick={clickhandler} className=" my-3">Know MOre</button>
        </div>
            
      </div>
      
        


      
     
    </div>
   <div className="mb-0">
   <Footer></Footer>
   </div>
  </motion.div>
  );
};

export default About;
