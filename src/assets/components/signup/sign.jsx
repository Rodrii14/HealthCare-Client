import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signUp } from "../../services/user.services"; 


const Ingresar = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    gender: "",
    dateBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
    height: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    userName: "",
    gender: "",
    dateBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
    height: "",
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

    // Validación básica en front
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (String(formData[key]).trim() === "") {
        errors[key] = "Este campo es obligatorio";
      }
    });

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      const response = await signUp(formData);
      console.log("Usuario creado:", response.data);

      // Limpiar formulario
      setFormData({
        fullName: "",
        userName: "",
        gender: "",
        dateBirth: "",
        email: "",
        password: "",
        confirmPassword: "",
        height: "",
      });

      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error del backend:",
          error.response?.status,
          error.response?.data
        );
      } else {
        console.error("Error al registrar usuario:", error);
      }
    }
  };

  return (
    <div className="p-2 flex flex-col w-full min-h-screen items-center justify-center bg-fondocolor">
      {/* 🔙 BOTÓN DE VOLVER AL INICIO */}
      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-1/2 mb-4">
        <Link
          to="/"
          className="text-letracolor2 font-font hover:underline px-2"
        >
          ← Volver al inicio
        </Link>
      </div>

      <div className="bg-fondocolor3 rounded-3xl px-4 py-6 md:px-10 md:py-8 lg:px-16 lg:py-10  w-full md:w-2/3 lg:w-3/4 xl:w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-font font-semibold text-letracolor1 text-center">
          Bienvenido a <span className="text-letracolor2">Health Care</span>
        </h1>
        <p className="font-font text-base text-letracolor1 mt-1 text-center mb-2">
          Crea una nueva cuenta
        </p>

        {/* FORMULARIO */}
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* ====== CAMPOS ====== */}

            <div>
              <label className="block text-letracolor1 font-font mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                  formErrors.fullName ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
                placeholder="Ingresa tu nombre completo"
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.fullName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-letracolor1 font-font mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                  formErrors.email ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
                placeholder="Ingresa tu correo electrónico"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-letracolor1 font-font mb-2">
                Nombre de usuario
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                  formErrors.userName ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
                placeholder="Ingresa tu nombre de usuario"
              />
              {formErrors.userName && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.userName}
                </p>
              )}
            </div>

            <div>
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
                placeholder="Ingresa una contraseña"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.password}
                </p>
              )}
            </div>

            <div>
              <label className="block text-letracolor1 font-font mb-2">
                Género
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                  formErrors.gender ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
              >
                <option value="">Selecciona tu género</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Otro">Otro</option>
              </select>
              {formErrors.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.gender}
                </p>
              )}
            </div>

            <div>
              <label className="block text-letracolor1 font-font mb-2">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                  formErrors.confirmPassword
                    ? "border-red-500"
                    : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
                placeholder="Confirmar contraseña"
              />
              {formErrors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.confirmPassword}
                </p>
              )}
            </div>

            <div>
              <label className="block text-letracolor1 font-font mb-2">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                name="dateBirth"
                value={formData.dateBirth}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                  formErrors.dateBirth ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
              />
              {formErrors.dateBirth && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.dateBirth}
                </p>
              )}
            </div>

            <div>
              <label className="block text-letracolor1 font-font mb-2">
                Altura
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-xl bg-fondocolor2 text-letracolor1 border ${
                  formErrors.height ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-letracolor2`}
                placeholder="Ingresa tu altura en metros"
                step="0.01"
              />
              {formErrors.height && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.height}
                </p>
              )}
            </div>

          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 bg-letracolor2 text-white font-font py-3 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Enviar
            </button>
          </div>
        </form>

        <div className="mt-8 flex justify-center items-center">
          <p className="font-font text-base text-letracolor1">
            ¿Ya tienes una cuenta?
          </p>
          <Link to="/Login">
            <button className="text-letracolor2 text-base font-font ml-2 hover:underline">
              Inicia sesión
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ingresar;
