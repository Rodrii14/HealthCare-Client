import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <section className='w-full bg-background flex flex-row justify-center items-center'>
      <div className='p-4 w-full h-2/3 lg:w-11/12 xl:w-11/12 text-white text-center bg-gradient-linear flex flex-col items-center gap-6
      lg:rounded-xl justify-evenly'>

        <h2 className=' text-center text-3xl font-semibold'>Tienes alguna consulta?</h2>

        <p className='lg:w-2/3 text-xl'>
          Estamos aquí para ayudarte. Tu opinión y preguntas son importantes para nosotros. Si necesitas información adicional, asistencia personalizada o simplemente quieres hacernos saber tus inquietudes, no dudes en ponerte en contacto con nuestro equipo. Hacerlo es fácil y rápido. ¡Haz clic aquí para acceder a nuestra página de contacto y déjanos saber cómo podemos servirte mejor! Tu satisfacción es nuestra prioridad.
        </p>
        <Link to='/Contact' className='w-full flex flex-row justify-center items-center'>
          <button className='p-5 w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg bg-blue border-blue-600  text-white font-font
          flex flex-row justify-center items-center gap-5 lg:text-base duration-300 hover:scale-[1.15] ease-in-out transition-all'>
            Contáctanos
            <FaArrowRight className='text-white' />
          </button>
        </Link>

      </div>
    </section>
  );
};

export default Contact;
