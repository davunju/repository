// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { pictures } from "./data";

const Home = () => {
  return (
    <div className="w-full mb-16 md:mb-24 text-slate-700 relative">
      <div className="md:w-[980px] mx-auto w-full px-5">
        <h1 className="mb-5 md:text-4xl text-2xl font-bold md:text-center text-transparent bg-gradient-to-r from-red-500 to-slate-700 bg-clip-text">
          Commercial Division
        </h1>
        <div className="mb-16 md:text-2xl textl-lg relative">
          <p className="mb-4">
            The Commercial Court was officially inaugurated on 15th September,
            1999. The Government of Tanzania endorsed the recommendations in
            1997. It is a division of the High Court of Tanzania. The difference
            with other High Court Registries is that this court specializes in
            the determination of commercial disputes only.
          </p>
          <Link to="about">
            <p className="hover:cursor-pointer text-lg text-sky-600 mb-16">
              Find out more <span aria-hidden="true">&rarr;</span>
            </p>
          </Link>

          <div className="hidden md:grid grid-cols-3 gap-8 place-items-center">
            {pictures.map((picture) => (
              <div
                key={picture.id}
                className="h-auto text-center border-b-4 border-red-500 rounded-lg w-full -rotate-1 hover:transition-transform hover:scale-105 hover:ease-in-out hover:duration-700"
              >
                <img src={picture.url} className="h-52 w-full rounded-t-lg" />
                <div className="p-2 md:text-base lg:text-md">
                  <h1 className="text-teal-800">{picture.name}</h1>
                  <p className="font-bold text-orange-700">
                    {picture.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Home;
