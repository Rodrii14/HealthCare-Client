/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#121212",
        "cards-background": "#1C1D1E",
        "blue": "#4353EB",
        "white": "#FFFFFF",
        fondocolor: '#121212',
        letracolor1: '#EAEAEA',
        letracolor2: '#4353EB',
        fondocolor2: '#2563EB',
        letracolor3: '#FFFFFF',
        fondocolor3: '#1C1D1E'
      },
      width:{
        sectionText: '600px',
        sectionImage: '500px'
      },
      height:{
        sectionHeight: '600px',
        cardHeight: '278px'
      },
      fontFamily: {
        font: ['Poppins, sans-serif']
      },
      fontWeight: {
        bold: 700, 
      },
      fontSize:{
        Mtitle: '2rem',
        Mtext: '1.5rem'
      },
      backgroundImage:{
        'homeSection1':"url('./assets/images/Homepage/bgSection1.jpg')",
        'homeSection3':"url('./assets/images/Homepage/bgSection3.jpg')",
        'healthSection1':"url('./assets/images/Health/bgSection1.jpg')",
        'gradient-linear': 'linear-gradient(90deg, rgba(49,46,129,1) 7%, rgba(30,58,138,1) 44%, rgba(112,26,117,1) 100%)'
      }
    },
  },
  plugins: [],
}