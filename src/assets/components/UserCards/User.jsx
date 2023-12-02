import React from 'react';
import Navbar from '../HeadersxFooters/Navbar';
import FooterHP from '../HeadersxFooters/FooterHP';
import UserCards from './UserCards';

const User = () => {
    return (
        <div className='font-font h-auto bg-background text-white' >
            <div className='flex flex-col gap-5 justify-items-center '>
                {/* Section Username and email */}
                <section className=' text-center p-5 '>
                    <h2 className='font-semibold'>
                        User Name {/* Conect username from DB */}
                    </h2>
                    <p>
                        email {/* Conect email from DB */}
                    </p>

                </section>
                {/* Section cards */}
                <section className='flex flex-col items-center gap-5'>
                    <h1 className='font-font font-bold'>Algo ha cambiado?</h1>

                    <UserCards section={"#inputWeight"} bgIcon={"bg-[#D8FFE0]"} icon={"healthicons:weight-outline"} color={"#00FC37"} barColor={"bg-[#00FC37]"}
                        tittle={"Peso"} />
                    <UserCards section={"#inputFat"} bgIcon={"bg-[#FFFBA4]"} icon={"material-symbols:body-fat-rounded"} color={"#FFD600"} barColor={"bg-[#FFD600]"}
                        tittle={"Grasa Corporal"} />

                    <UserCards section={"#inputMuscle"} bgIcon={"bg-[#FDCBF5]"} icon={"icon-park-outline:muscle"} color={"#FB19C9"} barColor={"bg-[#FB19C9]"}
                        tittle={"Masa Muscular"} />

                    <UserCards section={"#inputGlucose"} bgIcon={"bg-[#FCBABA]"} icon={"material-symbols:glucose-outline"} color={"#FD4747"} barColor={"bg-[#FD4747]"}
                        tittle={"Glucosa en la Sangre"} />
                </section>



            </div>
            <FooterHP />
        </div>
    );
};

export default User;
