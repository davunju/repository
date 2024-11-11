import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchLatest = async () => {
    try {
      const response = await fetch("http://localhost:5000/stories/latestnews");
      const jsonData = await response.json();
      setNews(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  return (
    <div className="max-w-7xl w-full mx-auto text-slate-900 p-10 my-12 space-y-10">
      <h1 className="text-2xl font-semibold mb-5">
        Latest <span className="font-bold text-red-500">News</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {news.map((article) => (
          <div
            key={article.id}
            className="flex flex-col gap-4 cursor-pointer bg-gray-200 ring-1 ring-inset ring-gray-300 rounded-lg shadow-md"
          >
            <div className="">
              <div className="mb-2">
                {article.image_path && (
                  <img
                    src={`http://localhost:5000/${article.image_path}`}
                    className="h-auto w-full rounded-lg"
                  />
                )}
              </div>
              <div className="px-4 space-y-2">
                <div className="text-sm text-slate-900 flex gap-5 mb-2">
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-slate-500 size-3"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                    <p>{article.fullname}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="fill-slate-500 size-3"
                    >
                      <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
                    </svg>
                    <p>{new Date(article.date).toISOString().split("T")[0]}</p>
                  </div>
                </div>
                <h1 className="mb-2 md:text-base lg:text-lg font-semibold">
                  {article.title}
                </h1>
                <div className="lg:text-base mb-2 mr-3">
                  {article.subtitle.split(" ").slice(0, 30).join(" ") + " ..."}
                </div>
                <Link to={`/news/${article.slug}`}>
                  <p className="text-sky-500 my-4 font-semibold hover:underline hover:underline-offset-4">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <Link to="/news">
          <button className="text-lg text-sky-50 p-3 bg-slate-700 hover:bg-red-700 rounded-lg">
            See more news
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
