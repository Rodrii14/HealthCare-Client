import { useEffect, useState } from 'react'
import User from './assets/components/Profile/user/user'
import Contacto from './assets/components/Contact-us/contactanos'
import Health from './assets/components/Health/Health'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './assets/components/Homepage/Homepage';
import Ingresar from './assets/components/signup/sign';
import InicioSesion from './assets/components/login/Login';
import VideoPlayer from './assets/components/Video Player/VideoPlayer'
import BarraNav from './assets/components/Navbar/nav'
import Navbarinit from './assets/components/Homepage/Sections/Navbarsimple'
import { getVideos } from './assets/services/video.services'

function App() {

  const [allVideo, setAllVideos] = useState([]);
  const [page, setPage] = useState(1);

  const handlePage = (number) => {
    if (number === 1) {
      if (page <= 1) {
        setPage(1);
      } else {
        setPage(page - 1);
      }
    } else {
      if (page === 6) {
        setPage(6);
      } else {
        setPage(page + 1);
      }

    }
  }

  useEffect(() => {
    const videos = async () => {
      const videos = await getVideos({ page, pageSize: 6 });
      console.log(videos);
      setAllVideos(videos);
    }

    videos(page);
  }, [page]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Register" element={<Ingresar />} />
        <Route path="/Login" element={<InicioSesion />} />
        <Route path="/Stats" element={<Health />} />
        <Route path="/Exercises" element={<VideoPlayer videoArray={allVideo} Page={handlePage} />} />
        <Route path="/Contact" element={<Contacto />} />
        <Route path="/Profile" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App