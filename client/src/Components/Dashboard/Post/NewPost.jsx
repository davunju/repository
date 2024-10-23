import { useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    heading: "",
    story: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/stories", formData);
      alert("Form data submitted successfully");
      window.location = "/news";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <main className="w-full lg:w-[980px] mx-auto mb-10 md:mb-16 flex flex-col justify-center text-slate-700">
      <div className="space-y-5 w-fulll lg:w-[60%] mx-auto mb-5">
        <h1 className="text-2xl font-bold">Create New Post</h1>
      </div>

      <form
        onSubmit={onSubmitForm}
        className="space-y-5 w-fulll lg:w-[60%] mx-auto"
      >
        <div>
          <label htmlFor="name" className="block leading-6 mb-2 font-medium">
            Author
          </label>
          <input
            type="text"
            name="fullname"
            id="name"
            value={formData.fullname}
            onChange={handleChange}
            className="block ring-1 ring-inset w-7/12 ring-slate-300 p-2 rounded-md shadow-sm outline-none focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="heading" className="block leading-6 mb-2 font-medium">
            Heading
          </label>
          <input
            type="text"
            name="heading"
            id="heading"
            value={formData.heading}
            onChange={handleChange}
            className="block ring-1 ring-inset w-9/12 ring-slate-300 rounded-md p-2 shadow-sm outline-none focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="story" className="block leading-6 mb-2 font-medium">
            Paragraph
          </label>
          <textarea
            name="story"
            id="story"
            rows="5"
            value={formData.story}
            onChange={handleChange}
            className="block ring-1 ring-inset w-full ring-slate-300 rounded-md border-0 outline-none py-1.5 shadow-sm placeholder:slate-300 px-2 focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
          ></textarea>
        </div>

        <div>
          <label htmlFor="date" className="block leading-6 mb-2 font-medium">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="block ring-1 ring-inset w-56 ring-slate-300 rounded-md p-2 outline-none focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <label for="cover-photo" class="block leading-6 mb-2 font-medium">
            Cover photo
          </label>
          <div className="mt-2 flex justify-center rounded-md border border-dashed border-slate-400 px-6 py-10">
            <div class="text-center">
              <svg
                className="mx-auto h-12 w-12 text-slate-400"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="mt-4 flex leading-6">
                <label
                  for="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-500 focus-within:outline-none hover:underline underline-offset-4"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="leading-6 text-sm">PNG, JPG, GIF up to 4MB</p>
            </div>
          </div>
        </div>

        <div>
          <button className="block text-lg p-2 bg-sky-500 rounded-md text-white w-56">
            Create Post
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewPost;
