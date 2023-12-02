import React, { useState } from 'react';
import BarraNav from '../Navbar/Nav';
import FooterHP from '../../Homepage/Sections/FooterHP';
import UserCards from '../usercards/Usercards';
import { FaUser } from 'react-icons/fa';

const User = ({ user }) => {

    return (

        <div className='font-font h-auto bg-fondocolor3 text-white' >
            <div className='flex flex-col gap-5 justify-items-center '>
                {/* Section Username and email */}
                <section className=' text-center p-5 '>
                    <h2 className='font-semibold'>
                        {user.userName}
                    </h2>
                    <p>
                        {user.email}
                    </p>

                </section>
                {/* Section cards */}
                <section className='flex flex-col items-center gap-5 m-5 '>
                    <h1 className='font-poppins  text-4xl text-center'>¿Ha cambiado</h1>
                    <h1 className='font-poppins  text-4xl text-center'>algo?</h1>
                    <h2 className='text-justify font-poppins'>Actualiza tus tarjetas para llevar un mejor </h2>
                    <h2 className='text-justify font-poppins'>registro de tus datos</h2>

                    <UserCards bgIcon={"bg-[#D8FFE0]"} icon={"healthicons:weight-outline"} color={"#00FC37"} barColor={"bg-[#00FC37]"}
                        tittle={"Peso"} />
                    <UserCards bgIcon={"bg-[#FFFBA4]"} icon={"material-symbols:body-fat-rounded"} color={"#FFD600"} barColor={"bg-[#FFD600]"}
                        tittle={"Grasa Corporal"} />

                    <UserCards bgIcon={"bg-[#FDCBF5]"} icon={"icon-park-outline:muscle"} color={"#FB19C9"} barColor={"bg-[#FB19C9]"}
                        tittle={"Masa Muscular"} />

                    <UserCards bgIcon={"bg-[#FCBABA]"} icon={"material-symbols:glucose-outline"} color={"#FD4747"} barColor={"bg-[#FD4747]"}
                        tittle={"Glucosa en la Sangre"} />
                    <UserCards bgIcon={"bg-[#78C4CE]"} icon={"healthicons:blood-pressure"} color={"#0082BB"}
                        tittle={"Presión Arterial"} />
                </section>

            </div>
            <FooterHP />
        </div>
    );
};

export default User;
