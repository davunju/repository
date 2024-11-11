// eslint-disable-next-line no-unused-vars
import React from "react";
//import "./Courts.css";
import { links } from "./data";

const Link = () => {
  return (
    <div className="p-10 max-w-7xl w-full mx-auto mb-16 rounded-lg bg-gray-200">
      <h1 className="text-2xl font-bold mb-5 text-center">Related Links</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 md:gap-10">
        {links.map((link) => (
          <a href={link.url} target="_blank">
            <div className="w-full text-center p-4 bg-gray-300 ring-1 ring-inset ring-gray-400 rounded-md flex flex-col justify-center gap-2 items-center">
              <img src={link.img} alt="" className="size-10 md:size-12" />
              <p className="md:leading-6 font-semibold text-sm md:text-lg hover:underline hover:underline-offset-4">
                {link.placeholder}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Link;
