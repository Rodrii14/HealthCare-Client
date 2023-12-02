import axios from 'axios';

const URL = import.meta.env.VITE_BASEURL;

export const signUp = async (form) => {
    try {
        const message = await axios.post(`${URL}/HC/user/`, form, { headers: { 'Content-Type': 'application/json' } })
        return message;
    } catch (error) {
        console.error(error);
    }
}

export const logIn = async (form) => {
    try {
        const message = await axios.post(`${URL}/HC/user/login`, form, { headers: { 'Content-Type': 'application/json' } })
        return message;
    } catch (error) {
        console.error(error);
    }

}   

