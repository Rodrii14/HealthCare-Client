// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

// Páginas públicas
import Homepage from "../assets/components/Homepage/Homepage";
import Login from "../assets/components/login/Login";
import Register from "../assets/components/signup/sign";

// Páginas protegidas (dashboard y demás)
import Health from "../assets/components/Health/Health";
import Contact from "../assets/components/Contact-us/contactanos";
import User from "../assets/components/Profile/user/user";

// NUEVAS PÁGINAS
import MetricsPage from "../pages/metrics/MetricsPage";
import StatsPage from "../pages/metrics/StatsPage";
import ResourcesPage from "../pages/resources/ResourcesPage";

export default function AppRouter() {
  // Usuario de prueba mientras conectamos con backend
  const fakeUser = {
    name: "Demo User",
    email: "demo@healthcare.com",
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            {/* Dashboard principal (tarjetas) */}
            <Route path="/dashboard" element={<Health />} />

            {/* Métricas globales (tu nueva página informativa) */}
            <Route path="/metrics" element={<MetricsPage />} />

            {/* Recursos (página nueva que ya hicimos) */}
            <Route path="/resources" element={<ResourcesPage />} />

            {/* Perfil */}
            <Route path="/profile" element={<User user={fakeUser} />} />

            {/* NUEVA RUTA: detalles / estados de métricas */}
            <Route path="/Stats" element={<StatsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
