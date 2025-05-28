import AsyncStorage from '@react-native-async-storage/async-storage';

type Usuario = {
  email: string;
  usuario: string;
  senha: string;
};

const USUARIOS_KEY = 'usuarios';

// Salvar novo usuário
export async function cadastrarUsuario(novo: Usuario): Promise<void> {
  const json = await AsyncStorage.getItem(USUARIOS_KEY);
  const usuarios: Usuario[] = json ? JSON.parse(json) : [];

  const jaExiste = usuarios.some(u => u.usuario === novo.usuario);
  if (jaExiste) throw new Error('Usuário já cadastrado');

  usuarios.push(novo);
  await AsyncStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
}

// Autenticar login
export async function autenticar(usuario: string, senha: string): Promise<void> {
  const json = await AsyncStorage.getItem(USUARIOS_KEY);
  const usuarios: Usuario[] = json ? JSON.parse(json) : [];

  const existe = usuarios.find(u => u.usuario === usuario && u.senha === senha);
  if (!existe) throw new Error('Credenciais inválidas');
}
