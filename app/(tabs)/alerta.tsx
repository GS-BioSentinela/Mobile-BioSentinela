import { View, Text, FlatList, StyleSheet } from 'react-native';
import AlertaCard from '../components/AlertaCard';

const dadosMock = [
  { id: '1', local: 'Mata Atlântica', risco: 'Alto', hora: '12:30' },
  { id: '2', local: 'Cerrado - DF', risco: 'Médio', hora: '13:00' },
];

export default function Alertas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alertas Ativos</Text>
      <FlatList
        data={dadosMock}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <AlertaCard {...item} />}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77C4A6',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0B3D3B',
    marginBottom: 16,
    textAlign: 'center',
  },
  lista: {
    paddingBottom: 16,
  },
});
