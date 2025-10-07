import axios from 'axios';
import { authStore } from '../stores/authStore';

const api = axios.create({
    baseURL : 'http://localhost:5005/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = useAuthStore.getState()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
