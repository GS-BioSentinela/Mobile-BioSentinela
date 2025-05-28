import { View, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as SMS from 'expo-sms';

export default function SOS() {
  const enviarSOS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      await SMS.sendSMSAsync(
        ['199'],
        '⚠️ Emergência: foco de incêndio detectado próximo à minha localização!'
      );
    } else {
      Alert.alert('Erro', 'SMS não disponível neste dispositivo.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={enviarSOS}>
        <Text style={styles.textoBotao}>🚨 Enviar SOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#77C4A6', // fundo suave
    padding: 24,
  },
  botao: {
    backgroundColor: '#B00020', // vermelho alarme
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

