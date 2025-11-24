import axios from "axios";

const URL = import.meta.env.VITE_BASEURL;

export const updateData = async (form, token, endpoint) => {
    try {
        const message = await axios.post(`${URL}/HC/${endpoint}`, form, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return message;
    } catch (error) {
        console.error(error);
    }
}

export const getValueData = async (token, endpoint) => {
    try {
        const { data } = await axios.get(`${URL}/HC/${endpoint}`, { headers: { 'Authorization': `Bearer ${token}` } });
        const values = data.map(a =>{
            return a.values;
        })
        return values;
    } catch (error) {
        console.error(error);
    }
}

export const getDateData = async (token, endpoint) => {
    try {
        const { data } = await axios.get(`${URL}/HC/${endpoint}`, { headers: { 'Authorization': `Bearer ${token}` } });
        const dates = data.map(a =>{
            return a.date;
        })
        return dates;
    } catch (error) {
        console.error(error);
    }
}

export const getAllData = async (token, endpoint) => {
    try {
        const { data } = await axios.get(`${URL}/HC/${endpoint}`, { headers: { 'Authorization': `Bearer ${token}` } });
        return data;
    } catch (error) {
        console.error(error);
    }
}