import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import AlertaCard from '../components/AlertaCard';
import api from '../utils/api';

type Alerta = {
  tipo: string;
  mensagem: string;
  sensorId: number;
};

type Sensor = {
  tipo: string;
  localizacao: string;
  regiaoId: number;
};

type Regiao = {
  nome: string;
  bioma: string;
};

type AlertaExpandido = {
  tipo: string;
  mensagem: string;
  localizacao: string;
  regiao: string;
  bioma: string;
};

export default function Alertas() {
  const [alertas, setAlertas] = useState<AlertaExpandido[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        const [alertasRes, sensoresRes, regioesRes] = await Promise.all([
          api.get('/alertas'),
          api.get('/sensores'),
          api.get('/regiao'),
        ]);

        const alertas: Alerta[] = alertasRes.data;
        const sensores: Sensor[] = sensoresRes.data;
        const regioes: Regiao[] = regioesRes.data;

        const dadosCompletos: AlertaExpandido[] = alertas.map(alerta => {
          const sensor = sensores[alerta.sensorId];
          const regiao = regioes[sensor?.regiaoId];

          return {
            tipo: alerta.tipo,
            mensagem: alerta.mensagem,
            localizacao: sensor?.localizacao || 'Desconhecida',
            regiao: regiao?.nome || 'Região desconhecida',
            bioma: regiao?.bioma || 'Bioma desconhecido',
          };
        });

        setAlertas(dadosCompletos);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados.');
        console.error(error);
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, []);

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0B6E4F" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alertas Ativos</Text>
      <FlatList
        data={alertas}
        keyExtractor={(_, index) => index.toString()}
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
