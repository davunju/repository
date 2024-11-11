// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound";
import Login from "./Components/Pages/Login";
import AllNews from "./Components/Pages/AllNews";
import Dashboard from "./Components/Dashboard/Dashboard";
import NewPost from "./Components/Dashboard/Post/NewPost";
import AboutUs from "./Components/Pages/AboutUs";
import NewsArticle from "./Components/Pages/NewsArticle";
import ProtectedRoute from "./Components/protectedRoute";
import Fees from "./Components/Pages/Fees/Fees";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  });

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const ScrollToTop = () => {
    const pathName = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathName]);
    return null;
  };

  return (
    <BrowserRouter>
      <div className="bg-hero bg-center bg-cover bg-fixed">
        <ScrollToTop />
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/news" element={<AllNews />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/fees&rules" element={<Fees />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
