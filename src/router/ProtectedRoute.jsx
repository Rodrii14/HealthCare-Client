// src/router/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = sessionStorage.getItem("toke"); // el mismo que guardas en Login

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
