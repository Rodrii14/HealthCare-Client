
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const Descubrete = () => {
  return (
    <section className='p-4 grid grid-row-2 text-white lg:h-sectionHeight'>

      <article className=' px-4 pt-6'>
        <h2 className='text-center text-3xl font-semibold'>Tu salud es importante!</h2>
        <p className='text-center font'>
          Con nuestra herramienta de cálculo, puedes determinar si te encuentras en tu peso adecuado y obtener tu índice de grasa corporal. Es fácil y rápido. Simplemente ingresa tus datos, y te proporcionaremos información  sobre tu estado de salud y composición corporal.
        </p>
        <div className='flex flex-row justify-center items-center py-3'>
          <a href="" className='text-center font text-blue'
          >Llevar el control</a>
          <FaArrowRight className='text-blue' />
        </div>



      </article>


      <figure className='p-1.5 flex flex-row items-center h-1/2 justify-center grow' >
        <img className='rounded' 
          src="./src/assets/images/Homepage/third_section.jpg"
          alt="IMAGEN " />
      </figure>
    </section>
  );
};

export default Descubrete;
