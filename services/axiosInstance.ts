import axios from 'axios';
import {Platform} from 'react-native';
import authStore from "@/state/authStore";

const baseURL = Platform.OS === 'web'
    ? 'http://localhost:5200/api/v1' // Base URL for web
    : 'http://10.0.2.2:5200/api/v1'; // Base URL for mobile/simulator

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptors can be added here to handle token refresh, etc.
axiosInstance.interceptors.request.use(
    (config) => {
        const token = authStore.getState().token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;