// services/token.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToken(token: string) {
  await AsyncStorage.setItem('@token', token);
}

export async function getToken(): Promise<string | null> {
  return await AsyncStorage.getItem('@token');
}

export async function removeToken() {
  await AsyncStorage.removeItem('@token');
}
