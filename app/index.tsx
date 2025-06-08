import { View, TextInput, Alert, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { loginUsuario } from './utils/auth'; // novo caminho correto

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    try {
      await loginUsuario(usuario, senha);
      Alert.alert('Sucesso', 'Login efetuado com sucesso!');
      router.replace('alerta'); // redireciona para a tela principal
    } catch (err: any) {
      Alert.alert('Erro', err.message || 'Erro ao fazer login');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/BioSentinela_s_fundo.png')} style={styles.image} />

      <TextInput
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.buttonText}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#77C4A6',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 14,
    marginBottom: 16,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#0B3D3B',
  },
  button: {
    backgroundColor: '#0B6E4F',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
