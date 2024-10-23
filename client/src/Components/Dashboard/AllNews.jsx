import { useEffect, useState } from "react";

const AllNews = () => {
  const [updates, setUpdates] = useState([]);

  const getUpdates = async () => {
    try {
      const response = await fetch("http://localhost:5000/stories");
      const jsonData = await response.json();
      setUpdates(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUpdates();
  }, []);

  return (
    <main className="w-full md:w-[980px] mx-auto text-slate-700 mb-10 md:mb-16">
      <h1 className="text-3xl font-bold text-center mb-5">News and Updates</h1>
      <div className="grid grid-cols-2 gap-5">
        {updates.map((update) => (
          <div
            key={update.id}
            className="ring-1 ring-slate-200 ring-inset p-4 bg-slate-100 rounded-md"
          >
            <h1 className="font-semibold text-lg underline underline-offset-4 mb-2">
              {update.heading}
            </h1>
            <p className="mb-2">{update.story}</p>

            <div className="flex items-center justify-between">
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-slate-500 size-3"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
                <p>{update.full_name}</p>
              </div>

              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-slate-500 size-3"
                >
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
                </svg>
                <p>{update.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllNews;
