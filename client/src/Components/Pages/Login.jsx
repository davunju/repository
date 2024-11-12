import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    const token = localStorage.getItem("token");
    onLogin(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      const result = await fetch("http://localhost:5000/protected", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful");
        handleLoginClick();
        navigate("/dashboard");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Error Logging in");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mb-10 md:mb-16 text-slate-700 p-5 md:p-0">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block leading-6">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 focus:ring-sky-500 focus:border-transparent transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <p className="my-4 text-red-500 italic font-normal">{message}</p>

            <div>
              <button
                type="submit"
                className="flex w-1/2 justify-center rounded-md bg-sky-500 p-2 font-semibold leading-6 text-white shadow-sm hover:bg-orange-400"
              >
                Log in
              </button>
            </div>

            <div className="flex items-center justify-between">
              <a
                href="mailto:ictsupport@judiciary.go.tz"
                className="text-sky-500 underline underline-offset-4"
              >
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
