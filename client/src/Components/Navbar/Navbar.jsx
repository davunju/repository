// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/logo_bl.png";
import emblem from "/assets/emblem.png";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <header className="mb-5 md:mb-16">
      <div className="md:bg-slate-100 bg-gradient-to-r from-red-300 via-red-50 to-red-300 shadow-lg">
        <nav className="px-2">
          <div className="flex items-center gap-5 justify-between md:justify-center p-5 md:p-2 mx-auto">
            <div className="flex items-center gap-1 md:gap-2">
              <img src={emblem} className="size-10 md:size-24" alt="" />
              <div className="text-red-700 text-center md:text-2xl font-bold">
                <h1 className="text-base md:text-3xl">
                  High Court of Tanzania
                </h1>
                <h2 className="text-sm md:text-lg lg:text-2xl font-semibold">
                  Commercial Division
                </h2>
              </div>
              <img src={logo} className="size-10 md:size-24" alt="" />
            </div>
            <button onClick={handleMenu} className="md:hidden">
              {menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="size-8 fill-red-700"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="size-8 fill-red-700"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
        <ul
          className={`bg-red-700 p-3 md:flex items-center justify-center md:text-center lg:gap-5 md:gap-2 gap-1 ${
            menu
              ? "bg-red-700 p-3 md:flex items-center justify-center lg:gap-5 gap-1"
              : "hidden"
          }`}
        >
          <Link to="/">
            <li
              onClick={closeMenu}
              className="p-2 text-base cursor-pointer md:text-sm lg:text-base text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4"
            >
              Home
            </li>
          </Link>

          <Link to="about">
            <li
              onClick={closeMenu}
              className="p-2 text-base cursor-pointer md:text-sm lg:text-base text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4"
            >
              About Us
            </li>
          </Link>

          <Link to="/fees&rules">
            <li
              onClick={closeMenu}
              className="p-2 text-base cursor-pointer md:text-sm lg:text-base text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4"
            >
              Court Fees & Rules
            </li>
          </Link>

          <Link to="/news">
            <li
              onClick={closeMenu}
              className="p-2 text-base cursor-pointer md:text-sm lg:text-base text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4"
            >
              News
            </li>
          </Link>

          <a href="https://tanzlii.org/judgments/TZHCComD/" target="_blank">
            <li
              onClick={closeMenu}
              className="p-2 text-base cursor-pointer md:text-sm lg:text-base text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4"
            >
              Judgments & Ruling
            </li>
          </a>

          <form
            action=""
            className="relative flex md:flex-row flex-col items-start md:items-center md:gap-5"
          >
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <button
                    onClick={closeMenu}
                    className="p-2 text-slate-200 md:text-sm lg:text-base hover:text-orange-200 hover:underline hover:underline-offset-4"
                  >
                    Dashboard
                  </button>
                </Link>
                <button
                  onClick={handleLogoutClick}
                  className="p-2 text-slate-200 md:text-sm lg:text-base hover:text-orange-200 hover:underline hover:underline-offset-4"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="login">
                <button
                  onClick={closeMenu}
                  className="p-2 text-slate-200 md:text-sm lg:text-base hover:text-orange-200 hover:underline hover:underline-offset-4"
                >
                  Login
                </button>
              </Link>
            )}
            <div className="relative mt-3 md:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 fill-slate-400 absolute top-3 right-2"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="p-2 w-full outline-none rounded-md"
              />
            </div>
          </form>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
