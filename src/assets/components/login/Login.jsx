import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../../services/user.services';

const InicioSesion = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    identifier: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        errors[key] = 'Este campo es obligatorio';
      }
    });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setFormData({
        identifier: '',
        password: ''
      });
      const { data } = await logIn(formData);
      navigate('/');
      console.log(data);
      sessionStorage.setItem('toke', data);
    }
  };

  return (
    <div className='p-2 flex flex-col w-full min-h-screen items-center justify-center bg-fondocolor'>
      <section className='bg-fondocolor3 rounded-lg p-8 shadow-xl w-3/8 h-50 flex flex-col gap-4 justify-center items-center drop-shadow-xl '>
        <h1 className='text-4xl font-font font-semibold text-letracolor1'>Bienvenido a <span className='text-letracolor2'>Health Care</span></h1>
        <p className='font-font text-Mtext text-letracolor1 mt-4'>Inicia Sesión</p>
        <form onSubmit={handleSubmit} className='lg:w-4/6 w-full'>
          <div className='flex flex-col gap-8 mt-8'>
            <div>
              <label className='text-lg text-letracolor1 font-font'>Usuario o Correo Electrónico </label>
              <input
                name='identifier'
                value={formData.identifier}
                onChange={handleInputChange}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-letracolor1 my-2'
                placeholder='Ingresa tu usuario o correo electronico'
                required
              />
              {formErrors.identifier && (
                <p className='text-red-500 text-sm'>{formErrors.identifier}</p>
              )}
            </div>
            <div>
              <label className='text-lg text-letracolor1 font-font'>Contraseña</label>
              <input
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-letracolor1'
                placeholder='Ingresa tu contraseña'
                type='password'
                required
              />
              {formErrors.password && (
                <p className='text-red-500 text-sm'>{formErrors.password}</p>
              )}
            </div>
          </div>
          <div className='mt-8 flex flex-col gap-y-4 w-full justify-center items-center'>
            <button
              className='active:scale-[.98] active:duration-75 hover:scale-[1.15] ease-in-out transition-all py-3 rounded-xl bg-fondocolor2 text-letracolor3 text-lg font-font font-bold w-full'
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-font text-base text-letracolor1'>¿No tienes una cuenta?</p>
          <Link to='/Register'>
            <button className='text-letracolor2 text-base font-font ml-2 hover:underline'>Crear cuenta</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InicioSesion;