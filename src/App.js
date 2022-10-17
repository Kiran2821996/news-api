import React from "react";
import Inshorts from "./componenets/Inshorts";
import Headlines from "./componenets/Headlines";
import Favourite from "./componenets/Favourite";
import About from "./componenets/About";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Headlines />} />
        <Route path="/inshorts" element={<Inshorts />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
