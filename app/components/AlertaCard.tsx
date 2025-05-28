import { View, Text, StyleSheet } from 'react-native';

type AlertaCardProps = {
  local: string;
  risco: string;
  hora: string;
};

export default function AlertaCard({ local, risco, hora }: AlertaCardProps) {
  return (
    <View style={styles.card}>
      <Text>📍 Local: {local}</Text>
      <Text>🔥 Risco: {risco}</Text>
      <Text>🕒 Hora: {hora}</Text>
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
