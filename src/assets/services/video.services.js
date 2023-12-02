import axios from "axios";

const URL = import.meta.env.VITE_BASEURL;

export const getVideos = async({ page, pageSize }) =>{
    try {
        const { data } = await axios.get(`${URL}/HC/videos?page=${page}&pageSize=${pageSize}`, { headers: { 'Content-Type': 'application/json' } })
        return data;
    } catch (error) {
        console.error(error);
    }
}