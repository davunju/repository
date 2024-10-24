// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import AllNews from "./Components/Dashboard/AllNews";
import Dashboard from "./Components/Dashboard/Dashboard";
import NewPost from "./Components/Dashboard/Post/NewPost";
import AboutUs from "./Components/Pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-hero bg-center bg-cover bg-fixed">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="news" element={<AllNews />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
