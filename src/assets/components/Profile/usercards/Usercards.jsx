import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const UserCards = ({ bgIcon, icon, color, tittle }) => {
    return (

        <div className='flex flex-col items-center'>


            <button className='p-3 w-80 bg-cards-background  justify-center items-center gap-2
        rounded-lg shadow-lg shadow-black'>
                <div className="px-2 w-full flex flex-row justify-left items-center gap-4">
                    <div className={`p-2 w-1/4 ${bgIcon} rounded-full flex flex-row justify-center items-center`}>
                        <Icon icon={`${icon}`} width={50} height={50} color={`${color}`} />
                    </div>
                    <div className="w-3/4 flex flex-col justify-center items-left">
                        <h4 className="w-full text-white text-Mtext">{tittle}</h4>
                        <p className="text-blue"><Link to='/Stats' className='hover:underline hover:underline-offset-4'>Más detalles</Link></p>
                    </div>
                </div>
            </button>
        </div>

    );
};

export default UserCards;