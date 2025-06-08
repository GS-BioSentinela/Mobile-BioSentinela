// services/auth.ts
import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@token';

export async function cadastrarUsuario(username: string, password: string): Promise<void> {
  await api.post('/auth/register', { username, password });
}

export async function loginUsuario(username: string, password: string): Promise<void> {
  const response = await api.post('/auth/login', { username, password });
  const token = response.data; // ou jwt, authToken, etc.

  if (!token) throw new Error('Token não retornado pela API');

  await AsyncStorage.setItem(TOKEN_KEY, token);
}


// export async function loginUsuario(username: string, password: string): Promise<void> {
//   const response = await api.post('/auth/login', { username, password });

//   console.log('Resposta da API:', response.data); // 👈 veja o que vem de verdade

//   const token = response.data.token; // ajuste aqui conforme a resposta
//   if (!token) throw new Error('Token não retornado pela API');

//   await AsyncStorage.setItem('@token', token);
// }



export async function getToken(): Promise<string | null> {
  return await AsyncStorage.getItem(TOKEN_KEY);
}

export async function logoutUsuario(): Promise<void> {
  await AsyncStorage.removeItem(TOKEN_KEY);
}
