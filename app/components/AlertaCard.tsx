import { View, Text, StyleSheet } from 'react-native';

type AlertaCardProps = {
  tipo: string;
  mensagem: string;
  localizacao: string;
  regiao: string;
  bioma: string;
};

export default function AlertaCard({ tipo, mensagem, localizacao, regiao, bioma }: AlertaCardProps) {
  return (
    <View style={styles.card}>
      <Text>📍 Local: {localizacao}</Text>
      <Text>🗺️ Região: {regiao}</Text>
      <Text>🌿 Bioma: {bioma}</Text>
      <Text>⚠️ Tipo: {tipo}</Text>
      <Text>💬 Mensagem: {mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
