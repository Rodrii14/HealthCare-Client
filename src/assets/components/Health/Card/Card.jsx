import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getValueData } from '../../../services/stats.services';

const Card = ({ bgIcon, icon, color, barColor, tittle, unit, minValue, midValue, maxValue, endpoint }) => {

    const [value, setValue] = useState(0);

    const getValuesFromDB = async () => {
        let _data = await getValueData(sessionStorage.getItem('toke'), endpoint);
        const data = _data.reverse();
        setValue(data[0]);
    }

    useEffect(()=>{
        getValuesFromDB();
    },[])

    let valueForMin, valueForMid, valueForMax;

    if (value >= minValue && value <= midValue) {
        valueForMin = minValue;
        valueForMid = value - minValue;
        valueForMax = 0
    } else if (value >= midValue) {
        valueForMin = minValue;
        valueForMid = midValue - minValue;
        valueForMax = value - midValue;
    } else {
        valueForMin = value;
        valueForMid = 0;
        valueForMax = 0;
    }

    return (
        <div className="p-3 w-80 font-font bg-cards-background flex flex-col justify-center items-center gap-2
        rounded-lg shadow-lg shadow-black">
            <div className="px-2 w-full flex flex-row justify-left items-center gap-4">
                <div className={`p-2 w-1/4 ${bgIcon} rounded-full flex flex-row justify-center items-center`}>
                    <Icon icon={`${icon}`} width={50} height={50} color={`${color}`} />
                </div>
                <div className="w-3/4 flex flex-col justify-center items-left">
                    <h4 className="w-full text-white text-Mtext">{tittle}</h4>
                </div>
            </div>

            <div className="px-3 w-full flex flex-col gap-1">

                {/* TITULOS DE LA BARRA DE MEDICIÓN */}
                <div className="px-1 w-full flex flex-row justify-end items-center gap-1">
                    <p className="text-white">{value}</p>
                    <p className="text-white">{unit}</p>
                </div>

                {/* BARRA DE MEDICIÓN */}
                <div className='px-1 w-full flex flex-row justify-center gap-1'>

                    {/* PRIMER RANGO */}
                    <div className={`h-5 grow ${bgIcon} rounded-s-lg overflow-hidden`}>
                        {/* BARRA DE COLOR */}
                        <div style={{ width: `${(valueForMin / minValue) * 100}%` }}
                            className={`h-full ${barColor}`} />
                    </div>

                    {/* SEGUNDO RANGO */}
                    <div className={`h-5 grow ${bgIcon} overflow-hidden`}>
                        <div style={{ width: `${(valueForMid / (midValue - minValue)) * 100}%` }}
                            className={`h-full ${barColor}`} />
                    </div>

                    {/* TERCER RANGO */}
                    <div className={`h-5 rounded-r-lg grow ${bgIcon} overflow-hidden`}>
                        <div style={{ width: `${(valueForMax / (maxValue - midValue)) * 100}%` }}
                            className={`h-full ${barColor}`} />
                    </div>

                </div>

            </div>

            {/* INDICADORES PARA LA BARRA */}
            <div className='pr-2 flex flex-row gap-14'>
                <p className='grow text-white'>{minValue}</p>
                <p className='grow text-white'>{midValue}</p>
            </div>

        </div>
    );
}

export default Card;