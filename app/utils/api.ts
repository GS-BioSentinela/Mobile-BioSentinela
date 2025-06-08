// services/api.ts
import axios from 'axios';
import { getToken } from './token';

const api = axios.create({
  baseURL: 'https://biosentinela-api.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para enviar token JWT em requisições autenticadas
api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchSensores() {
  const token = await getToken();
  if (!token) throw new Error('Usuário não autenticado');

  const response = await api.get('/sensores', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export default api;
