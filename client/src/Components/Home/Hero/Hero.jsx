// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { pictures } from "./data";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto w-full text-slate-700 relative p-10">
      <div className="mb-5">
        <h1 className="text-4xl font-bold leading-6 mb-5">
          High Court of Tanzania
        </h1>
        <h2
          className="leading-6 text-3xl text-red-500 font-semibold
        "
        >
          Commercial Division
        </h2>
      </div>
      <div className="flex items-start justify-between gap-10 mb-8 md:mb-10">
        <p className="lg:leading-7 leading-6 text-lg">
          The Commercial Court was officially inaugurated on 15th September,
          1999. The Government of Tanzania endorsed the recommendations in 1997.
          It is a division of the High Court of Tanzania. The difference with
          other High Court Registries is that this court specializes in the
          determination of commercial disputes only.
        </p>
        <img
          src="/assets/gravel.jpg"
          alt=""
          className="w-1/2 h-auto rounded-xl"
        />
      </div>
      <div className="mb-5 relative text-lg">
        <h2 className="text-3xl font-semibold leading-6 mb-5">
          Meet Our <span className="font-bold text-red-500">Leadership</span>
        </h2>
        <p className="w-full lg:w-[70%] mb-8">
          They're leaders who are passionate about{" "}
          <span className="font-medium text-red-500">Legal</span> and{" "}
          <span className="font-medium text-sky-500">Justice</span>, leading the{" "}
          {""}
          <span className="font-semibold">Commercial Division</span> with their
          heart.
        </p>
        <div className="grid grid-cols-3 gap-5 place-items-center w-full">
          {pictures.map((picture) => (
            <div key={picture.id} className="w-full">
              <img
                src={picture.url}
                alt=""
                className="mb-3 rounded-lg w-80 h-64"
              />
              <div>
                <h1 className="font-semibold">{picture.name}</h1>
                <h2 className="text-red-500 font-medium">{picture.position}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
