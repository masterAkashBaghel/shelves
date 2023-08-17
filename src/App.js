 import React from'react';
 import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import FictionSection from './pages/FictionSection';
import Cart from './pages/Cart';
import Romance from './pages/Romance';
import Drama from './pages/Drama';
import Mystery from './pages/Mystery';
import Fantasy from './pages/Fantasy';
import Comedy from './pages/Comedy';
import SearchBar from './pages/Searchbar';
import Explore from './pages/Explore';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './pages/NotFound';
 




function App() {
  return (
  <div className=' w-screen h-scren overflow-auto'>
     {/* navigation bar */}
     <div>
      <Navbar></Navbar>
     </div>

     {/* routes */}
     <Routes>
      <Route  exact path='/' element = {<Home />} />
      <Route path='/Fiction' element={<FictionSection></FictionSection>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/Romance' element={<Romance></Romance>}></Route>
      <Route path='/Drama' element={<Drama></Drama>}></Route>
      <Route path='/Mystery' element={<Mystery></Mystery>}></Route>
      <Route path='/fantasy' element={<Fantasy></Fantasy>}></Route>
      <Route path='/Comedy' element={<Comedy></Comedy>}></Route>
      <Route path="/Searchbar/:query" element={<SearchBar />} />
      <Route path='/Explore' element={<Explore />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path="*" element={<NotFound/>} />
     </Routes>
    
  </div>
  );
}

export default App;
