import React from "react";
import { Link } from "react-router-dom";
import { newsContent } from "./data";

const News = () => {
  return (
    <div className="text-slate-700 w-full p-8">
      <div className="mb-5 md:w-[980px] w-full mx-auto">
        <h1 className="text-2xl font-semibold mb-3">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsContent.map((content) => (
            <div
              key={content.id}
              className="flex flex-col gap-4 cursor-pointer"
            >
              <img src={content.url} className="h-auto w-full" />
              <div className="">
                <div className="text-sm text-slate-500 flex gap-4 my-1">
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-slate-500 size-3"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                    <p>{content.author}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-slate-500 size-3"
                    >
                      <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
                    </svg>
                    <p>{content.date}</p>
                  </div>
                </div>
                <h1 className="mb-1 md:text-base lg:text-lg font-semibold hover:underline hover:underline-offset-4">
                  {content.heading}
                </h1>
                <p className="lg:text-md mb-2 mr-3">{content.content}</p>
                <p className="text-sky-500 mb-3 font-semibold hover:underline hover:underline-offset-4">
                  Read More
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto md:w-[980px]">
        <Link to="news">
          <button className="text-lg text-sky-50 p-3 bg-slate-700 hover:bg-red-700">
            See more news
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
