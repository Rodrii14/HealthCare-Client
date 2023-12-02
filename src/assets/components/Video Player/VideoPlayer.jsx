import React from 'react';
import Navbar from '../HeadersxFooters/Navbar';
import FooterHP from '../HeadersxFooters/FooterHP';
import PlayerPage from './Components/Player/Player';
import Suggestion from './Components/Player/Suggestions/Suggestion';
import BarraNav from '../HeadersxFooters/Navbar';
import { getVideos } from '../../services/video.services';
import { useState } from 'react';


const VideoPlayer = ({videoArray, Page}) => {

    const [link, setLink] = React.useState(null);

    const handleVideoLink = (videoLink) => {
        setLink(videoLink);
    }

    return (
        <div className='font-poppins bg-fondocolor3 font-font' >
            <BarraNav />
            <div className='w-full flex flex-col gap-5 justify-items-center flex-grow'>
                {/* Section video player */}
                <section className='w-full h-screen flex flex-col justify-center items-center' style={{ backgroundImage: 'url("https://img.freepik.com/foto-gratis/gimnasio-barra-suelo-cartel-que-dice-peso_1340-38220.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais")', objectFit:'cover' }}>
                        <PlayerPage link={link}/>
                </section>
            </div>

            {/* Section video cards */}
            <Suggestion videoArray={videoArray} _link={link} _setLink={handleVideoLink} _Page={Page}/>

            <FooterHP />
        </div>
    )
};

export default VideoPlayer;
