import React from 'react';
import YouTube from 'react-youtube';

const PlayerPage = ({ link }) => {

    const opts = {
        width: '100%',
        height: '100%'
    }

    return (
        <YouTube videoId={link} opts={opts} className='w-60 h-60 md:w-96 md:h-96 lg:w-2/3 lg:h-4/6 xl:w-4/6 xl:h-5/6' />
    );
};

export default PlayerPage;
