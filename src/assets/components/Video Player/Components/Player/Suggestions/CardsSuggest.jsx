import React from 'react';
const CardsSuggest = ({ video, setLink }) => {

    return (
        <div className='bg-fondocolor rounded-lg shadow-lg shadow-black'>

            <div className='w-72 h-72 flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-6 justify-center items-center p-2'>
                    <h1 className='text-center text-white font-font font-semibold text-md'>
                        {video.tittle}
                    </h1>
                    <p className='text-gray-400 font-font font-semibold text-sm'>
                        {video.channelName}
                    </p>
                    <button className='p-3 w-11/12 rounded-lg bg-blue border-blue-600  text-white font-font
                    flex flex-row justify-center items-center gap-5 lg:text-base 
                    duration-300 hover:scale-[1.15] ease-in-out transition-all' onClick={() => setLink(video.link)}>
                        Ir
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CardsSuggest;
