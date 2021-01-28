import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5fcf9a811f23740016630a97.mockapi.io'
});

export default api;