import axios from 'axios';

// https://jsonplaceholder.typicode.com

// Axios to put configuration and avoid repeat headers and url for each endpoint
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;