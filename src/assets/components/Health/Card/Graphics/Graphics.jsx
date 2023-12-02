import React from 'react';
import LinesChart from './Chartline/LinesChart';
import { useEffect, useState } from 'react';
import { getDateData, getValueData } from '../../../../services/stats.services';

const Graphics = ({ title, barColor, endpoint }) => {
    
    const [horizontal, setHorizontal] = useState(0);
    const [vertical, setVertical] = useState(0);

    const getDatesFromDB = async () => {
        let _data = await getDateData(sessionStorage.getItem('toke'), endpoint);
        setHorizontal(_data);
    }

    const getValuesFromDB = async () => {
        let _date = await getValueData(sessionStorage.getItem('toke'), endpoint);
        setVertical(_date);
    }

    useEffect(()=>{
        getDatesFromDB();
        getValuesFromDB();
    },[])

    return (
        <div className="p-10 md:w-110 lg:w-130 xl:w-155 bg-cards-background flex flex-col justify-center items-center gap-4
        rounded-lg shadow-lg shadow-black m-4" style={{ width: "auto", maxWidth: "144vw", height: "auto" }}>
            <LinesChart tittle={title} barraColor={barColor} horizontalArray={horizontal} verticalArray={vertical}/>
        </div>
    );
};

export default Graphics;
