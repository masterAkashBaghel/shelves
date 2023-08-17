import React from "react";
import TypewriterText from "../pages/TypewriterText";
// import img from '../assets/girl.jpg'
import topCategoriesData from "./topCategoriesData ";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import fiction from "../assets/scifi.jpg";
import drama from "../assets/drama.jpg";
import mystery from "../assets/mystery.jpg";
import fantasy from "../assets/fantasy.jpg";
import romance from "../assets/romance.jpg";
import comedy from "../assets/comedy.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../pages/Footer";
import { motion } from "framer-motion";
const Home = () => {
  const navigate = useNavigate();
  function toexplore() {
    navigate("/Explore");
  }
  return (
    <div>
      {/* Hero Section */}
      <div className="w-[75%] mx-auto lg:flex justify-center gap-7 md:flex-row sm:flex-col items-center lg:mt-[150px] sm:mt-[150px] md:mt-[200px] custom-media-query">
        {/* Image */}
        <div className="lg:w-[40%] md:w-[100%] sm:w-[100%] ">
          {/* <img className="h-[450px] hello rounded-2xl" src={img} alt="Girl reading a book" /> */}

          <Carousel
            showThumbs={false} // Hide thumbnail navigation
            showArrows={false} // Show navigation arrows
            autoPlay={true} // Enable autoplay
            infiniteLoop={true} // Enable infinite loop
            interval={5000} // Set interval between slides (in milliseconds)
          >
            <NavLink to="/Fiction">
              <img
                className="h-[450px]  rounded-2xl"
                src={fiction}
                alt="fictionimg"
              />
            </NavLink>
            <NavLink to="/Drama">
              <img
                className="h-[450px]   rounded-2xl"
                src={drama}
                alt="dramalogo"
              />
            </NavLink>
            <NavLink to="/Mystery">
              <img
                className="h-[450px]   rounded-2xl"
                src={mystery}
                alt="mysterylogo"
              />
            </NavLink>
            <NavLink tp="/Comedy">
              <img
                className="h-[450px]   rounded-2xl"
                src={comedy}
                alt="comedylogo"
              />
            </NavLink>
            <NavLink to="/Fantasy">
              <img
                className="h-[450px]   rounded-2xl"
                src={fantasy}
                alt="fanatasylogo"
              />
            </NavLink>
            <NavLink to="/Romance">
              <img
                className="h-[450px]   rounded-2xl"
                src={romance}
                alt="romancelogo"
              />
            </NavLink>
          </Carousel>
        </div>
        {/* Content */}
        <div className="flex items-center justify-center flex-col lg:w-[40%] rounded-xl gap-7 mt-5 md:w-full sm:w-full  ">
          <div className="flex w-full mx-auto flex-col">
            <TypewriterText
              texts={[
                "Discover New Reads",
                "Explore Book Genres",
                "Immerse Yourself in Stories",
              ]}
              staticText={"Shelves"}
            />

            <p className=" text-2xl text-[#2ECC71] my-2 font-bold">
              Where Every Page Holds a New Adventure
            </p>
          </div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              delay: 4,
              stiffness: 120,
              duration: 5,
            }}
          >
            <button onClick={toexplore}>Explore Books</button>
          </motion.div>
        </div>
      </div>
      {/* Categories Section */}
      <section className="flex items-center justify-center mt-10">
        <motion.h1
          initial={{ y: -650 }}
          animate={{ y: -10 }}
          transition={{ delay: 1, duration: 3 }}
          className="font-bold text-3xl text-blue-900 hello p-3 rounded-full text-center"
        >
          Explore the Top Categories
        </motion.h1>
      </section>
      <div
        id="books-category"
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 rounded-lg w-[75%] mx-auto mt-8"
      >
        {topCategoriesData.map((category, index) => (
          <motion.section
            whileHover={{ scale: 1.1 }}
            className="border-2 p-2 hello rounded-xl  "
            key={index}
          >
            <img
              className="h-[150px] rounded-full w-[150px] mx-auto"
              src={category.coverImage}
              alt="Category Cover"
            />
            <h3 className="font-bold text-[#21618C] mx-auto">
              {category.name}
            </h3>
            <p className="font-semibold opacity-50">{category.description}</p>
            <NavLink to={`/${category.name}`}>
              <div className="mt-2 mb-3 mx-auto flex gap-2 items-center   font-bold text-green-500">
                Insights
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaArrowRight></FaArrowRight>
                </motion.span>
              </div>
            </NavLink>
          </motion.section>
        ))}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
