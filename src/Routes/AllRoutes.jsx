import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog";
import Features from "../Components/Features";
import Login from "../Components/Login";
import Pricing from "../Components/Pricing";
import Resources from "../Components/Resources";
import SignUp from "../Components/SignUp";
import Solution from "../Components/Solution";
import Navbar from "../Components/Navbar";
import WhySendinblue from "../Pages/WhySendinblue";
import Enterprise from "../Pages/Enterprise";
import Payment from "../Components/Payment";
import PrivateRoute from "../Components/PrivateRoute";
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/solution"
          element={
            <PrivateRoute >
              <Solution />
            </PrivateRoute>
          }
        />
        <Route
          path="/pricing"
          element={
            <PrivateRoute>
              <Pricing />
            </PrivateRoute>
          }
        />
        <Route
          path="/features"
          element={
            <PrivateRoute>
              <Features />
            </PrivateRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <PrivateRoute>
              <Resources />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/whysendinblue" element={<WhySendinblue />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
