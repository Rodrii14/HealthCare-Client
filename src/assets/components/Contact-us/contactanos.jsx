import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='p-2 flex flex-col font-font w-full min-h-screen items-center justify-center bg-fondocolor'>
            <div className='bg-fondocolor3 rounded-3xl px-4 py-6 shadow-xl w-full md:w-2/3 lg:w-3/4 xl:w-1/2 flex flex-col justify-center items-center mx-auto'>
                <h1 className='text-2xl md:text-4xl font-semibold text-letracolor1 mb-2 text-center'>Bienvenido a <Link to='/'><span className='text-letracolor2'>Health care</span></Link></h1>
                <p className='font-medium text-base text-letracolor1 mt-1 text-center mb-2'>
                    Entendemos que tu salud y bienestar son fundamentales, y estamos comprometidos a asistirte en la consecución de tus objetivos en esos aspectos.
                </p>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-col w-full mb-4'>
                            <label htmlFor="name" className="text-lg text-letracolor1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border rounded bg-transparent border-2 border-gray-100 rounded-xl text-letracolor1"
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full mb-4'>
                            <label htmlFor="email" className="text-lg text-letracolor1">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border rounded bg-transparent border-2 border-gray-100 rounded-xl text-letracolor1"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full mb-4'>
                            <label htmlFor="message" className="text-lg text-letracolor1">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full p-2 border rounded bg-transparent border-2 border-gray-100 rounded-xl text-letracolor1"
                                onChange={handleChange}
                                value={formData.message}
                                required
                            ></textarea>
                        </div>
                        <div className='mt-6 flex flex-col gap-y-4 w-full justify-center items-center'>
                            <button
                                className='active:scale-[.98] active:duration-75 hover:scale-[1.15] ease-in-out transition-all py-3 rounded-xl bg-fondocolor2 text-letracolor3 text-lg font-bold w-4/6'
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacto;