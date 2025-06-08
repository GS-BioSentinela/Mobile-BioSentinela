import { View, Switch, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [localizacao, setLocalizacao] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(false);

  // Verifica se o usuário está logado
  useEffect(() => {
    const verificarLogin = async () => {
      const token = await AsyncStorage.getItem('@token');
      if (!token) {
        Alert.alert('Sessão expirada', 'Faça login novamente.');
        router.replace('/');
      }
    };
    verificarLogin();
  }, []);

  const sair = async () => {
    await AsyncStorage.removeItem('@token');
    Alert.alert('Sessão encerrada', 'Você foi desconectado.');
    router.replace('/');
  };

  const excluir = async () => {
    await AsyncStorage.clear();
    Alert.alert('Conta excluída', 'Todos os dados foram apagados.');
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.item}>
        <Text style={styles.label}>Notificações</Text>
        <Switch
          value={notificacoes}
          onValueChange={setNotificacoes}
          trackColor={{ false: '#ccc', true: '#0B6E4F' }}
          thumbColor={notificacoes ? '#FFFFFF' : '#999'}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Localização em tempo real</Text>
        <Switch
          value={localizacao}
          onValueChange={setLocalizacao}
          trackColor={{ false: '#ccc', true: '#0B6E4F' }}
          thumbColor={localizacao ? '#FFFFFF' : '#999'}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Tema Escuro</Text>
        <Switch
          value={temaEscuro}
          onValueChange={setTemaEscuro}
          trackColor={{ false: '#ccc', true: '#0B6E4F' }}
          thumbColor={temaEscuro ? '#FFFFFF' : '#999'}
        />
      </View>

      <TouchableOpacity style={styles.botaoSair} onPress={sair}>
        <Text style={styles.textoBotaoSair}>Sair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoExcluir} onPress={excluir}>
        <Text style={styles.textoBotaoExcluir}>Excluir conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77C4A6',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0B3D3B',
    marginBottom: 24,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#0B3D3B',
  },
  botaoSair: {
    marginTop: 32,
    backgroundColor: '#B00020',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotaoSair: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoExcluir: {
    marginTop: 12,
    backgroundColor: '#FF6B6B',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotaoExcluir: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
