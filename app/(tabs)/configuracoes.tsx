import { View, Switch, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Notificações:</Text>
      <Switch
        value={notificacoes}
        onValueChange={setNotificacoes}
        trackColor={{ false: '#ccc', true: '#0B6E4F' }}
        thumbColor={notificacoes ? '#FFFFFF' : '#999'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77C4A6', // cor suave de fundo
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  label: {
    fontSize: 18,
    color: '#0B3D3B',
    marginBottom: 12,
    fontWeight: 'bold',
  },
});
