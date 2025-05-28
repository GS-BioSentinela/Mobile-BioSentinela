import { View, TextInput, Alert, StyleSheet, Text,  TouchableOpacity, Image  } from 'react-native';
import { useState } from 'react';
import { autenticar } from './utils/storage';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    try {
      await autenticar( usuario, senha);
      Alert.alert('Sucesso', 'Login efetuado com sucesso!');
      router.replace('alerta');
    } catch (err: any) {
      Alert.alert('Erro', err.message || 'Erro ao fazer login');
    }
  };
  

  return (
    <View style={styles.container}>
        <Image source={require('../assets/BioSentinela_s_fundo.png')} style={styles.image} />
      
        
        <TextInput
            placeholder="Usuário "
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
          <Text style={styles.buttonText}>
            Não tem conta?  Cadastre-se
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignContent:'center',
      padding: 24,
      backgroundColor: '#77C4A6', // fundo claro suave
    },
    titulo: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 32,
      textAlign: 'center',
      color: '#0B6E4F', // verde escuro do logo
    },
    input: {
      borderWidth: 2,
      borderColor: 'black', // borda suave
      padding: 14,
      marginBottom: 16,
      borderRadius: 10,
      fontSize: 16,
      backgroundColor: '#FFFFFF',
      color: '#0B3D3B',
    },
    button: {
      backgroundColor: '#0B6E4F', // verde escuro do logo
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
        marginLeft:20
    }
  });