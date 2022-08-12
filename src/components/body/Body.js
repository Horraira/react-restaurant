import React from "react";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { Route, Redirect, Routes } from "react-router";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Body;
