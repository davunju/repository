// eslint-disable-next-line no-unused-vars
import React from "react";
//import "./Courts.css";
import { links } from "./data";

const Link = () => {
  return (
    <div className="mb-16 bg-gradient-to-r from-red-300 via-red-100 to-red-200">
      <div className="md:p-10 p-8  md:w-[980px] w-full mx-auto">
        <h1 className="text-2xl font-bold mb-5 text-center">Related Links</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 md:gap-10">
          {links.map((link) => (
            <a href={link.url} target="_blank">
              <div className="w-full text-center p-4 bg-slate-100 flex flex-col justify-center gap-2 items-center">
                <img src={link.img} alt="" className="size-10 md:size-12" />
                <p className="md:leading-6 font-semibold text-sm md:text-lg hover:underline hover:underline-offset-4">
                  {link.placeholder}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Link;
