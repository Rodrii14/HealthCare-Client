// src/components/navigation/MainNavBar.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Métricas", path: "/metrics" },
  { label: "Recursos", path: "/resources" },
  { label: "Perfil", path: "/profile" },
];

export default function MainNavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("toke");
    navigate("/login", { replace: true });
  };

  const linkBase =
    "px-3 py-2 rounded-md text-sm md:text-base font-font transition-colors";
  const linkInactive = "text-letracolor1 hover:text-letracolor2";
  const linkActive = "text-letracolor2 font-semibold underline";

  return (
    <nav className="bg-fondocolor3 text-white shadow-md sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / título */}
          <Link to="/dashboard" className="font-font text-lg md:text-xl">
            <span className="text-letracolor1 font-semibold">Health</span>
            <span className="text-letracolor2 font-semibold">Care</span>
          </Link>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${linkBase} ${
                  isActive(item.path) ? linkActive : linkInactive
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={handleLogout}
              className={`${linkBase} text-letracolor1 hover:text-red-400`}
            >
              Cerrar sesión
            </button>
          </div>

          {/* Botón menú mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="p-2 text-letracolor1 hover:text-letracolor2 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              <span className="text-2xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      {open && (
        <div className="md:hidden border-t border-fondocolor2 bg-fondocolor3">
          <div className="px-4 py-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`${linkBase} block ${
                  isActive(item.path) ? linkActive : linkInactive
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                handleLogout();
              }}
              className={`${linkBase} text-left text-letracolor1 hover:text-red-400 mt-2`}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
