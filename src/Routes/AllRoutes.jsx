import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog";
import Features from "../Components/Features";
import Login from "../Components/Login";
import Pricing from "../Components/Pricing";
import Resources from "../Components/Resources";
import SignUp from "../Components/SignUp";
import Solution from "../Components/Solution";
import {Container} from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import WhySendinblue from "../Pages/WhySendinblue";
import Enterprise from "../Pages/Enterprise";
const AllRoutes = () => {
  return (
    <>
    

    <Navbar/>
      <Routes>
        <Route path="/solution" element={<Solution />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/whysendinblue" element={<WhySendinblue />} />
        <Route path="/enterprise" element={<Enterprise />} />



      </Routes>
     
    </>
  );
};

export default AllRoutes;
