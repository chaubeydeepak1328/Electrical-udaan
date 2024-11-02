import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Flipbook from './Components/Flipbook';


const App = () => {
  return (
    <>
      <div className="App-nav">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/gallery" element={<Blogs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/flipbook-view/:pdfFile" element={<Flipbook />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
