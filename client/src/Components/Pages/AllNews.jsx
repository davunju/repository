import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllNews = () => {
  const [updates, setUpdates] = useState([]);

  const getUpdates = async () => {
    try {
      const response = await fetch("http://localhost:5000/stories");
      const jsonData = await response.json();
      console.log(jsonData);
      setUpdates(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUpdates();
  }, []);

  return (
    <main className="w-full md:w-[980px] mx-auto text-slate-700 mb-10 md:mb-16 p-3">
      <h1 className="text-xl md:text-3xl font-bold md:text-center mb-5">
        News and Updates
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {updates.map((update) => (
          <div
            key={update.id}
            className="ring-1 ring-slate-200 shadow-md ring-inset p-4 bg-slate-100 rounded-md hover:bg-gradient-to-r from-red-100 via-red-50 to-red-200"
          >
            <div className="flex gap-1 items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-slate-500 size-3"
              >
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
              </svg>
              <p>{new Date(update.date).toISOString().split("T")[0]}</p>
            </div>
            <Link to={`/news/${update.slug}`}>
              <h1 className="font-semibold text-lg hover:underline underline-offset-4 mb-3">
                {update.title}
              </h1>
            </Link>
            <p className="mb-2">{update.subtitle}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllNews;
