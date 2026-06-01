import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Change this to your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
    });

export default axios;

