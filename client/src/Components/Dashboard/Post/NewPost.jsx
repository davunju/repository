import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewPost = () => {
  const [fullname, setFullname] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  const [quillContent, setQuillContent] = useState("");
  const [image, SetImage] = useState(null);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
  };

  const handleQuillChange = (value) => {
    setQuillContent(value);
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 4 * 1024 * 1024) {
      alert("File size should not exceed 4MB");
      SetImage(null);
    } else {
      SetImage(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("content", quillContent);
      formData.append("date", date);
      if (image) formData.append("image", image);
      const response = await fetch("http://localhost:5000/stories", {
        method: "POST",
        body: formData,
      });

      window.location = "/news";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <main className="w-full lg:w-[980px] mx-auto mb-10 md:mb-16 flex flex-col justify-center text-slate-700">
      <div className="space-y-5 w-fulll lg:w-[60%] mx-auto mb-5">
        <h1 className="text-2xl font-bold">Create New Article</h1>
      </div>

      <form
        onSubmit={handleSubmit}
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
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="text-sm block ring-1 ring-inset w-9/12 ring-slate-300 p-2 rounded-md shadow-sm outline-none focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="title" className="block leading-6 mb-2 font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-sm block ring-1 ring-inset w-9/12 ring-slate-300 rounded-md p-2 shadow-sm outline-none focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <label
            htmlFor="subtitle"
            className="block leading-6 mb-2 font-medium"
          >
            Sub Title
          </label>
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            required
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="text-sm block ring-1 ring-inset w-9/12 ring-slate-300 rounded-md p-2 shadow-sm outline-none focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="content" className="block leading-6 mb-2 font-medium">
            Content
          </label>
          <Quill
            value={quillContent}
            onChange={handleQuillChange}
            modules={modules}
            style={{ height: "150px", marginBottom: "60px" }}
          />
        </div>

        <div>
          <label htmlFor="date" className="block leading-6 mb-2 font-medium">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="text-sm block ring-1 ring-inset w-56 ring-slate-300 rounded-md p-2 outline-none focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="file-upload" class="block leading-6 mb-2 font-medium">
            Cover photo
          </label>
          <div className="mt-2 flex justify-center rounded-md border border-dashed border-slate-400 px-6 py-10">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-slate-400"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="mt-4 flex leading-6">
                <label
                  for="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-500 focus-within:outline-none hover:underline underline-offset-4"
                >
                  <span>{image ? `${image.name}` : "Upload a file"}</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="leading-6 text-sm">PNG, JPG, JPEG up to 4MB</p>
            </div>
          </div>
        </div>

        <div>
          <button className="block text-lg p-2 bg-sky-500 rounded-md text-white w-56">
            Create Article
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewPost;
