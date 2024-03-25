import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

authInstance.interceptors.request.use(
  (config) => {
    const Authorization = localStorage.getItem('Authorization') || '';
    if (Authorization) {
      config.headers['Authorization'] = `${Authorization}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);