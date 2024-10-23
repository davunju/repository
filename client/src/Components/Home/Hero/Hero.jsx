// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import { pictures } from "./data";

const Home = () => {
  return (
    <div className="w-full mb-16 md:mb-24">
      <div className="md:w-[980px] mx-auto w-full px-5">
        <h1 className="mb-5 md:text-3xl text-2xl font-semibold md:text-center">
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
          <div className="flex items-center gap-2 underline underline-offset-4 hover:cursor-pointer text-sky-600 mb-16">
            <p>Find out more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
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
    </div>
  );
};

export default Home;
