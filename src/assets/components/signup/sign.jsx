import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../services/user.services';

const Ingresar = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        gender: '',
        dateBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
        height: '',
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        userName: '',
        gender: '',
        dateBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
        height: '',
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

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Las contraseñas no coinciden';
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // enviar a una API
            setFormData({
                fullName: '',
                userName: '',
                gender: '',
                dateBirth: '',
                email: '',
                password: '',
                confirmPassword: '',
                height: '',
            });

            const { data } = await signUp(formData);
            console.log(data);
            if (data) {
                setIsLoggedIn(true);
                sessionStorage.setItem('toke', data);
                navigate('/')
            }
        }
    };

    return (
        <div className='p-2 flex flex-col w-full min-h-screen items-center justify-center bg-fondocolor'>
            <div className='bg-fondocolor3 rounded-3xl px-4 py-6 shadow-xl w-full md:w-2/3 lg:w-3/4 xl:w-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-2xl md:text-4xl font-font font-semibold text-letracolor1 mb-2 text-c'>Bienvenido a <span className='text-letracolor2'>Health Care</span></h1>
                <p className='font-font text-base text-letracolor1 mt-1 text-center mb-2'>Crea una nueva cuenta</p>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex flex-col md:flex-row w-full'>
                        <div className='flex flex-col w-full md:w-1/2 md:mx-4 '>
                            <label className='text-lg text-letracolor1 font-font'>Nombre completo</label>
                            <input
                                name='fullName'
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent text-letracolor1 my-2'
                                placeholder='Ingresa tu nombre completo'
                                required
                            />
                            <label className='text-lg text-letracolor1 font-font'>Nombre de usuario</label>
                            <input
                                name='userName'
                                value={formData.userName}
                                onChange={handleInputChange}
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent text-letracolor1 my-2'
                                placeholder='Ingresa tu nombre de usuario'
                                required
                            />
                            <label className='text-lg text-letracolor1 font-font'>Genero</label>
                            <select
                                name='gender'
                                value={formData.gender}
                                onChange={handleInputChange}
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent text-letracolor1 my-2'
                                required
                            >
                                <option className='bg-fondocolor3' value="1">Femenino</option>
                                <option className='bg-fondocolor3' value="2">Masculino</option>
                            </select>
                            <label className='text-lg text-letracolor1 font-font mb-1'>Fecha de Nacimiento</label>
                            <input
                                type="date"
                                name='dateBirth'
                                value={formData.dateBirth}
                                onChange={handleInputChange}
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent text-letracolor1 my-2'
                                placeholder='Ingresa tu fecha de naciemiento'
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full md:w-1/2 md:mx-4'>
                            <label className='text-lg text-letracolor1 font-font'>Correo Electronico</label>
                            <input
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent text-letracolor1 my-2'
                                placeholder='Ingresa tu correo electronico'
                                required
                            />
                            {formErrors.email && (
                                <p className='text-red-500 text-sm'>{formErrors.email}</p>
                            )}
                            <label className='text-lg text-letracolor1 font-font'>Contraseña</label>
                            <input
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent text-letracolor1 my-2'
                                placeholder='Ingresa una contraseña'
                                type='password'
                                required
                            />
                            {formErrors.password && (
                                <p className='text-red-500 text-sm'>{formErrors.password}</p>
                            )}

                            <label className='text-lg text-letracolor1 font-font'>Confirmar Contraseña</label>
                            <input
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                type='password'
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent text-letracolor1 my-2'
                                placeholder='Confirmar'
                                required
                            />
                            {formErrors.confirmPassword && (
                                <p className='text-red-500 text-sm'>{formErrors.confirmPassword}</p>
                            )}
                            <label className='text-lg text-letracolor1 font-font'>Altura</label>
                            <input
                                name='height'
                                value={formData.height}
                                onChange={handleInputChange}
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent text-letracolor1 my-2'
                                placeholder='Ingresa tu altura en metros'
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 flex flex-col gap-y-4 w-full justify-center items-center'>
                        <button
                            className='active:scale-[.98] active:duration-75 hover:scale-[1.15] ease-in-out transition-all py-3 rounded-xl bg-fondocolor2 text-letracolor3 text-lg font-bold w-full md:w-4/6'
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>

                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-font text-base text-letracolor1'>¿Ya tienes una cuenta?</p>
                    <Link to='/Login'>
                        <button className='text-letracolor2 text-base font-font ml-2 hover:underline'>Inicia sesion</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Ingresar;