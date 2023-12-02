import React, { useState, useEffect, useRef } from 'react';
import { FaHeartbeat } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BarraNav = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [userProfile, setUserProfile] = useState({
        photo: 'url_de_la_foto',
        nickname: 'Username',
    });

    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenuOnOutsideClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeMenuOnOutsideClick);

        return () => {
            document.removeEventListener('mousedown', closeMenuOnOutsideClick);
        };
    }, []);

    return (
        <nav className='flex items-center justify-between flex-wrap bg-fondocolor p-6'>
            <div className='flex items-center flex-shrink-0 mr-6'>
                <h1 className='text-letracolor1 font-semibold text-3xl '>
                    <Link to='/'>Health <span className='text-letracolor2'> Care </span></Link>
                </h1>
            </div>
            <div>
                <button
                    id='boton'
                    className='flex items-center px-3 py-2 text-letracolor1 hover:text-letracolor1 hover:border-white'
                    onClick={toggleMenu}
                >
                    <svg
                        className='fill-current h-5 w-5'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
            {/*APARTADO DE MENU DESPLEGABLE*/}
            <div
                ref={menuRef}
                className={`fixed top-0 right-0 bottom-0 w-4/5 lg:w-1/5 bg-fondocolor overflow-y-auto transform ${menuVisible ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform ease-in-out duration-300 flex flex-col items-center justify-start`}
            >
                <button
                    className='text-letracolor1 mt-4 mr-4 hover:text-letracolor2'
                    onClick={toggleMenu}
                >
                    <svg
                        className='fill-current h-5 w-5'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title>Cerrar</title>
                        <path d='M13.41 12l6.36-6.36a1.5 1.5 0 1 0-2.12-2.12L11.29 9.29 4.93 2.93a1.5 1.5 0 0 0-2.12 2.12L9.59 12l-6.36 6.36a1.5 1.5 0 0 0 2.12 2.12L11.29 14.71l6.36 6.36a1.5 1.5 0 0 0 2.12-2.12L13.41 12z' />
                    </svg>
                </button>
                <div className='text-lg lg:text-xl mt-4'>
                    <div className='flex items-center text-letracolor1 mb-10 bg-gradient-linear rounded p-4'>
                        <img
                            src={userProfile.photo}
                            alt='Foto de perfil'
                            className='h-12 w-12 rounded-full mr-4'
                        />
                        <span className='text-lg lg:text-xl'>{userProfile.nickname}</span>
                    </div>

                    <a
                        href='#responsive-header'
                        className='flex items-center mt-2 text-letracolor1 hover:text-letracolor1 mb-10'
                    >
                        <FaHeartbeat className='mr-2 text-base lg:text-xl' />
                        <span>Salud</span>
                    </a>
                    <a
                        href='#responsive-header'
                        className='flex items-center mt-2 text-letracolor1 hover:text-letracolor1 mb-10'
                    >
                        <CgGym className='mr-2 text-base lg:text-xl' />
                        <span>Ejercicios</span>
                    </a>
                    <a
                        href='#responsive-header'
                        className='flex items-center mt-2 text-letracolor1 hover:text-letracolor1 mb-2'
                    >
                        <FaPhoneAlt className='mr-2 text-base lg:text-xl' />

                        <span>Contactanos</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default BarraNav;