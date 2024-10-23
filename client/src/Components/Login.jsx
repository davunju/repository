const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mb-10 md:mb-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-xl font-bold mb-4">Login</h3>
          <h4 className="font-medium">
            Don't have an account?{" "}
            <a href="mailto:ictsupport@judiciary.go.tz">
              <span className="text-sky-600 underline underline-offset-4">
                Contact system admin
              </span>
            </a>
          </h4>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label htmlFor="email" className="block leading-6">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block leading-6">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-1/2 justify-center rounded-md bg-sky-500 p-2 font-semibold leading-6 text-white shadow-sm hover:bg-orange-400"
              >
                Sign in
              </button>
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sky-500 underline underline-offset-4">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
