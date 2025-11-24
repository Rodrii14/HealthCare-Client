// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/navigation/MainNavBar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background font-font flex flex-col">
      <MainNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}


