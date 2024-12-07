import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api', // URL do back-end
});

export default api;
