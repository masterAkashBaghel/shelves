import React from "react";
import contactImg from "../assets/contact.png";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Footer from '../pages/Footer'
import {motion } from 'framer-motion'

const Contact = () => {
  return (
   <div>
     <div className="flex flex-col md:flex-row sm:flex-row h-auto w-full items-center justify-end mt-5   mx-auto   md:w-[75%] sm:w-[90%] bg-white hello  fiction-section   lg:mt-[150px] sm:mt-[150px] md:mt-[200px] custom-media-query">
      {/* imaghe */}
      <div> 
        <img src={contactImg} alt="contact" className="" />
      </div>
      {/* contact details */}
      <motion.div
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{delay:1, type:'spring'}}
        className=" border-2 rounded-2xl w-full h-auto    p-10 flex flex-col gap-4 m-5  hello
"
      >
        <h1 className="font-semibold text-3xl md:text-4xl mb-4 text-center">
          CONTACT
        </h1>
        <div className=" w-full h-[2px] bg-fuchsia-600"></div>
        <p className="font-semibold  atext-xl md:text-2xl mb-4 text-center text-[#9b5d26]">
          Let's collaborate and <span className=" text-[#82E0AA]"> grow</span>,
          So we can co-create a better{" "}
          <span className=" text-[#82E0AA]">tomorrow</span>{" "}
        </p>
        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://www.linkedin.com/in/master-akash-kumar-singh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>

          <div className="font-bold">
            LinkedIn
            <p className="opacity-50 ">Akash Kumar Singh</p>
          </div>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://github.com/masterAkashBaghel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-8 w-8"></FaGithub>
            </a>
          </div>
          <div className="font-bold">
            Github
            <p className=" opacity-50 ">masterAkashBaghel</p>
          </div>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://twitter.com/masterAkashBaghel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-8 w-8"></FaTwitter>
            </a>
          </div>
          <div className=" font-bold">
            Twitter
            <p className=" opacity-50">@masterAkashsing</p>
          </div>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <FaWhatsapp className="h-8 w-8"></FaWhatsapp>
          </div>
          <div className=" font-bold">
            Whatsapp
            <p className=" opacity-50">+91 9876543321</p>
          </div>
        </div>

        <div className=" w-full h-[2px] bg-fuchsia-600"></div>
      </motion.div>
     
    </div>
    <Footer></Footer>
   </div>
  );
};

export default Contact;

