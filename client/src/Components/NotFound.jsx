import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center mb-10 md:mb-16">
      <div className="text-center">
        <p className="text-2xl font-semibold text-sky-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 leading-7">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <a
              href="#"
              className="rounded-md bg-sky-500 px-3.5 py-2.5 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </Link>

          <a href="#" className="font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
