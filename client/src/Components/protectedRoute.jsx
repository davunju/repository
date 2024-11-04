import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = () => localStorage.getItem("isLoggedIn") === "true";
  return token && isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
