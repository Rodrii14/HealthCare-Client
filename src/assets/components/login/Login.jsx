import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logIn } from "../../services/user.services";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userOrEmail: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    userOrEmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.userOrEmail.trim()) {
      errors.userOrEmail = "Este campo es obligatorio";
    }

    if (!formData.password.trim()) {
      errors.password = "Este campo es obligatorio";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      // 🔐 Llamada a tu backend usando logIn de user.services
      const response = await logIn({
        // 👇 AHORA SE ENVÍA "identifier", como espera tu backend
        identifier: formData.userOrEmail,
        password: formData.password,
      });

      console.log("Respuesta login:", response?.data);

      // Si el backend devuelve solo el token, o { token: "..." }
      const token = response?.data?.token ?? response?.data;

      if (token) {
        sessionStorage.setItem("toke", token); // mismo nombre que usa ProtectedRoute
        navigate("/dashboard");
      } else {
        console.warn("El backend no devolvió un token válido");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error del backend:",
          error.response?.status,
          error.response?.data
        );
      } else {
        console.error("Error desconocido:", error);
      }
    }
  };

  return (
    <div className="p-2 flex flex-col w-full min-h-screen items-center justify-center bg-fondocolor">
      {/* 🔙 VOLVER AL INICIO */}
      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-1/2 mb-4">
        <Link
          to="/"
          className="text-letracolor2 font-font hover:underline px-2"
        >
          ← Volver al inicio
        </Link>
      </div>

      <div className="bg-fondocolor3 rounded-3xl px-4 py-6 md:px-10 md:py-8 lg:px-16 lg:py-10  w-full md:w-2/3 lg:w-3/4 xl:w-1/2 flex flex-col justify-center items-center shadow-xl">
        <h1 className="text-2xl md:text-4xl font-font font-semibold text-letracolor1 text-center">
          Bienvenido a <span className="text-letracolor2">Health Care</span>
        </h1>

        <p className="font-font text-base text-letracolor1 mt-1 text-center mb-6">
          Inicia Sesión
        </p>

        {/* FORMULARIO */}
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Usuario o correo */}
          <div className="mb-6">
            <label className="block text-letracolor1 font-font mb-2">
              Usuario o Correo Electrónico
            </label>
            <input
              type="text"
              name="userOrEmail"
              value={formData.userOrEmail}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                formErrors.userOrEmail
                  ? "border-red-500"
                  : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
              placeholder="Ingresa tu usuario o correo electrónico"
            />
            {formErrors.userOrEmail && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.userOrEmail}
              </p>
            )}
          </div>

          {/* Contraseña */}
          <div className="mb-6">
            <label className="block text-letracolor1 font-font mb-2">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                formErrors.password ? "border-red-500" : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
              placeholder="Ingresa tu contraseña"
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.password}
              </p>
            )}
          </div>

          {/* Botón */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 bg-letracolor2 text-white font-font py-3 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Entrar
            </button>
          </div>
        </form>

        {/* Crear cuenta */}
        <div className="mt-8 flex justify-center items-center">
          <p className="font-font text-base text-letracolor1">
            ¿No tienes una cuenta?
          </p>
          <Link to="/register">
            <button className="text-letracolor2 text-base font-font ml-2 hover:underline">
              Crear cuenta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
