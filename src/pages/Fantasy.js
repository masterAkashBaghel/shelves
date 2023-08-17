import React, { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Spinner from "../components/Spinner";
import {remove,add} from '../redux/slices/CartSlice'
import { useSelector ,useDispatch} from "react-redux";
import { toast } from "react-hot-toast";
import {motion } from 'framer-motion'

const Fantasy = () => {


  const [loader,setLoader] = useState(false)
  const [fictionBooks, setFictionBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;
  const totalBooksPerPage = 36;
  const totalPages = Math.ceil(totalBooksPerPage / booksPerPage);
  const apiKey = process.env.REACT_APP_BOOKS_API_KEY;
  useEffect(() => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=fantasy&startIndex=${startIndex}&maxResults=${totalBooksPerPage}&key=${apiKey}`;

    const fetchFictionBooks = async () => {
      try {
        setLoader(true);
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.items) {
          setFictionBooks(
            data.items.slice(startIndex, startIndex + booksPerPage)
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoader(false);
    };

    fetchFictionBooks();
  }, [currentPage, apiKey]);

  const pageRange = Array.from({ length: totalPages }, (_, index) => index + 1);

  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const{cart} = useSelector((state)=>state);
  const dispatch = useDispatch();
  const addItem =(book)=>
  {
    dispatch(add(book));
    toast.success(("item added"));
  }
  function removeItem(selectedBook)
  {
    dispatch(remove(selectedBook.id));
    toast.error(("item  removed"));
  }

  return (
    <motion.div
    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{delay:1, type:'spring'}}
     className="fiction-section w-[75%] mx-auto lg:flex-row justify-center gap-7 md:flex-row sm:flex-col items-center lg:mt-[150px] sm:mt-[150px] md:mt-[200px] custom-media-query">
      <div className=" flex   rounded-full items-center justify-center mb-5 flex-wrap bg-white ">
        <h2 className=" font-bold text-3xl   text-[#A04AC4] py-5 ">
          <TypewriterText
            texts={[
              "Step into Magical Worlds Filled with Wonder and Wonders",
"Unleash Your Imagination and Explore Fantastical Lands",
"Join Heroes on Quests of Bravery and Sorcery",
"Discover Uncharted Territories Beyond Reality's Bounds",
"Wield Magic and Encounter Creatures of Myth",
            ]}
            staticText={"Embark on Epic Adventures in Enchanted Realms"}
          ></TypewriterText>
        </h2>
      </div>
     {
      loader ? <Spinner></Spinner> :  (<div className="book-list grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5">
      {fictionBooks.map((book) => (
        <motion.div
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{delay:1, type:'spring'}}
         key={book.id} className="  border-2 p-3 bg-[#e8fcfa] hello  rounded-xl">
          <img
            className=" mx-auto rounded-xl"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
          <h3 className=" font-bold my-1 ">{book.volumeInfo.title}</h3>
          <p>
            <span className="font-semibold text-[#7b319b]">Authors:</span>{" "}
            {book.volumeInfo.authors}
          </p>
          <div
            className=" cursor-pointer border-2 p-2 rounded-full mt-1 text-center bg-lime-500 w-[30%] font-medium text-white flex items-center justify-center gap-2 hover:bg-amber-400"
            onClick={() => openModal(book)}
          >
            More {" "} <span>
            {" "}
            <BsArrowUpCircleFill />{" "}
          </span>
          </div>
          
        </motion.div>
      ))}
    </div> )
     }
      <div className="pagination flex mt-4 gap-5  mx-auto  items-center justify-center">
        {currentPage === 1 ? null : (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        )}
       <div className=" lg:flex md:flex gap-2 sm:hidden customforpage">
       {pageRange.map((page) => (
          <button  
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? " bg-white" : " " }
          >
            {page}
          </button>
        ))}
       </div>
        {currentPage === totalPages ? null : (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        )}
      </div>
      {selectedBook && (
        <motion.div
        initial={{y:-650}}
        animate={{y:-10}}
        transition={{delay:0 ,type:"spring" ,stiffness:120}}
        
        className="modal-overlay ">
          <div className="modal-content hello">
            <button className=" right-0 m-2 ml-[80%]" onClick={closeModal}>
              Close
            </button>
            {selectedBook.volumeInfo.imageLinks && selectedBook.volumeInfo.imageLinks.thumbnail && (
    <img
      className=" rounded-xl"
      src={selectedBook.volumeInfo.imageLinks.thumbnail}
      alt={selectedBook.volumeInfo.title}
    />
  )}
            <h3 className=" font-semibold text-2xl w-[50%] bg-white p-2  r rounded-full">{selectedBook.volumeInfo.title}</h3>
            <p className=" font-extrabold m-2 text-2xl bg-white  py-2  w-[50%] text-blue-900 rounded-full"><span className=" text-xl text-black ">Authors: </span>{selectedBook.volumeInfo.authors }</p>
            <p className=" border-2 p-2 hello rounded-md bg-white "><span className="font-bold">Description:</span> {selectedBook.volumeInfo.description}</p>
            <p className=" font-bold mt-3">Rating: {selectedBook.volumeInfo.averageRating || "N/A"}</p>
            <p className=" text-green-500"><span className=" font-bold text-black">Publication Year: </span>{selectedBook.volumeInfo.publishedDate}</p>
            <p className=" font-bold text-orange-400"><span className=" font-bold text-black">Page Count:</span> {selectedBook.volumeInfo.pageCount}</p>
            <div  className=" flex  justify-between mt-2">
            <div className=" bg-lime-500 w-[20%] text-center border-2 ml-3 rounded-full">
            <a 
              href={selectedBook.volumeInfo.infoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
             <span> Buy Now</span>
            </a>
            </div>
            <div>
             
             {
               cart.some((p)=>p.id===selectedBook.id) ? 
               ( <button className=" bg-red-400" onClick={()=>removeItem(selectedBook)}> Remove from Shelves</button>):
               (
                 <button onClick={()=>addItem(selectedBook)}>
                 Add To Shelves
               </button>
               )
             }

            </div>

           
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Fantasy;


