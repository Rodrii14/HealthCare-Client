import React from 'react'
import Navbar from './Sections/Navbarsimple'
import FooterHP from './Sections/FooterHP'
import Sections from './Sections/Sections'
import Contact from './Sections/Contact'
import Navbarinit from './Sections/Navbarsimple'
import BarraNav from './Sections/Navbar'
import Seccion from './Sections/Section'
const Homepage = () => {
  return (
    <div className='w-full bg-background font-font' >
      <Navbarinit />

      <div className='grid grid-rows-4 auto-rows-min gap-10'>

        {/* Control section */}
        <Sections title={"Tu salud es importante!"}
          paragraph={"Nuestro equipo está comprometido en ofrecerte las herramientas y los recursos necesarios para que tomes el control de tu salud . Ya sea que estés buscando información sobre rutinas de ejercicio efectivas, consejos para mantener un peso saludable o cualquier otra consulta relacionada con tu bienestar."}
          textB={"LLEVAR EL CONTROL"}
          image={"./src/assets/images/Homepage/first_section.png"}
          background={"bg-homeSection1"}
        />

        {/* Exercise section */}
        <Seccion image={"./src/assets/images/Homepage/second_section.png"}
          title={"Descubre una nueva rutina de ejercicios!"}
          paragraph={"En nuestro sitio, encontrarás una amplia variedad de entrenamientos. Ya sea que busques perder peso, ganar fuerza o simplemente mantenerte activo. ¡Empieza hoy mismo tu viaje hacia una vida más saludable y activa!"}
          textB={"DESCUBRELA"}
        />

        {/* Descubrete section */}
        <Sections title={"Descubrete!"}
          paragraph={"Con nuestra herramienta de cálculo, puedes determinar si te encuentras en tu peso adecuado y obtener tu índice de grasa corporal. Es fácil y rápido. Simplemente ingresa tus datos, y te proporcionaremos información  sobre tu estado de salud y composición corporal. "}
          textB={"REVISA LAS HERRAMIENTAS"}
          image={"./src/assets/images/Homepage/third_section.jpg"}
          background={"bg-homeSection3"} />

        {/* Contact section */}
        <Contact />
      </div>
      <FooterHP />
    </div>
  )
}

export default Homepage