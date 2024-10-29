import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsArticle = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  const getArticles = async (slug) => {
    try {
      const response = await fetch(`http://localhost:5000/stories/${slug}`);
      const jsonData = await response.json();
      console.log(jsonData);
      setArticle(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getArticles(slug);
  }, [slug]);

  if (!article) {
    return (
      <div className="text-center text-xl text-slate-700 mb-10 md:mb-16 animate-bounce">
        Loading...
      </div>
    );
  }

  return (
    <main className="text-slate-700 w-full lg:w-[980px] mx-auto mb-10 md:mb-16">
      <div className="w-full md:w-10/12 mx-auto">
        <div>
          {" "}
          {article && (
            <>
              <div className="flex gap-1 items-center mb-4 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-slate-500 size-3"
                >
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
                </svg>
                <p>{new Date(article.date).toISOString().split("T")[0]}</p>
              </div>
              <h1 className="mb-4 font-semibold text-3xl w-[90%] leading-10">
                {article.title}
              </h1>

              <div className="my-4">
                {article.image_path && (
                  <img src={`http://localhost:5000/${article.image_path}`} />
                )}
              </div>
              <div className="flex gap-1 items-center text-lg font-medium mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-slate-500 size-3"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
                <p className="text-sm">{article.fullname}</p>
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="mb-3"
              />
              <div></div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default NewsArticle;
