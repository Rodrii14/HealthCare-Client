import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Seccion = ({ title, paragraph, textB, image }) => {
  
    const token = sessionStorage.getItem('toke');
    let link;
    if (!token) {
        link = '/Login'
    } else {
        link = '/Exercises'
    }
  
    return (

        <section className='p-4 w-full flex flex-col justify-center items-center text-white gap-5 
        lg:flex-row lg:h-screen'>

            <figure className='h-full w-5/6 lg:w-1/2 xl:w-sectionImage flex flex-row items-center justify-center'>
                {/* Cambié object-fill a object-contain y ajusté el tamaño del contenedor */}
                <div className='h-96'>
                    <img className='h-full w-full rounded-lg'
                        src={image}
                        alt="IMAGEN"
                    />
                </div>
            </figure>

            <article className='p-8 h-full w-full md:w-1/2 xl:w-sectionText flex flex-col justify-evenly items-center'>
                <h2 className='text-left font-poppins font-bold block mt-1 text-2xl lg:text-3xl leading-tight '>
                    {title}
                </h2>

                <p className='font-poppins text-left  lg:text-lg '>
                    {paragraph}
                </p>

                <div className='p-5 w-11/12 sm:w-8/12 md:w-2/3 lg:w-2/3 xl:w-2/3 rounded-xl bg-fondocolor2 text-letracolor3 text-lg font-font font-bold
                flex flex-row items-center justify-center gap-5 lg:text-base duration-300 hover:scale-[1.15] ease-in-out transition-all '>

                    <Link to={link}>
                        <span className=' font-bold hover:underline '>
                            {textB}
                        </span>
                    </Link>

                    <FaArrowRight className='' />
                </div>
            </article>

        </section>

    )
}

export default Seccion;