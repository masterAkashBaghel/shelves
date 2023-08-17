import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import {remove} from '../redux/slices/CartSlice';
import img from '../assets/books2.jpg'
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const navigate = useNavigate();
  function handlebook()
  {
    navigate('/Explore');

  }
  const dispatch = useDispatch();
  function delHandler(selectedBook)
  {
     dispatch(remove(selectedBook.id));
     toast.success("item has been removed");
  }
  const { cart } = useSelector((state) => state);
 console.log(cart)
  return (
    <div  className="fiction-section w-[75%] mx-auto lg:flex-row justify-center gap-7 md:flex-row sm:flex-col items-center lg:mt-[150px] sm:mt-[150px] md:mt-[200px] custom-media-query">
    {
      cart.length > 0 ? (
        
          cart.map((selectedBook,index)=>{
  
            return (
              <div key={index} className=' mt-4'>
                 {selectedBook.volumeInfo.imageLinks && selectedBook.volumeInfo.imageLinks.thumbnail && (
    <img
      className="  rounded-xl"
      src={selectedBook.volumeInfo.imageLinks.thumbnail}
      alt={selectedBook.volumeInfo.title}
    />
  )}
              <h3 className=" font-semibold text-2xl       bg-white p-2  r rounded-full">{selectedBook.volumeInfo.title}</h3>
              <p className=" font-extrabold m-2 text-2xl bg-white  py-2  text-blue-900 rounded-full"><span className=" text-xl text-black ">Authors: </span>{selectedBook.volumeInfo.authors.join(", ")}</p>
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
               
                <div onClick={()=>delHandler(selectedBook)}>
            <div className=' w-[40px] h-[40px] rounded-full bg-red-400 flex items-center justify-center'><AiOutlineDelete ></AiOutlineDelete></div>
  
          
  
            </div>
              </div>
  
             
              </div>
              <div className=' h-[3px] w-[90%] bg-blue-700 mx-auto my-2'>
  
              </div>
              
            </div>
  
            );
          })
        
      ):(
        <div className=' flex  items-center cartdiv justify-center mx-auto gap-5  flex-col  '>
          <div className=' w-[60%] hello rounded-lg'>
            <img  className=' rounded-xl' src={img} alt='logoss'></img>
          </div>
          
          <div className=' flex flex-col gap-5 ml-2'>
          <p className=' font-bold text-red-500 lg:text-3xl md:text-2xl sm:text-xl cutomcart'> No boooks in Bookshelf</p>
          <div className=' mx-auto'>
          <button onClick={handlebook}>Expore Categories</button>
          </div>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default Cart
