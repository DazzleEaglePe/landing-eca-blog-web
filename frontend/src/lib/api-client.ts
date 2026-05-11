import axios from 'axios';

// Usar variable de entorno si existe, sino fallback a localhost
const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for global error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // You can handle global error logging here
    const message = error.response?.data?.error || error.message;
    return Promise.reject(new Error(message));
  }
);
