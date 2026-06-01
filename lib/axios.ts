import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Change this to your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
    });

export default apiClient;

