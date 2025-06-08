import MapView, { Marker } from 'react-native-maps';
import { View, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { buscarSensores, Sensor } from '../utils/sensores';

export default function Mapa() {
  const [sensores, setSensores] = useState<Sensor[]>([]);
  const [loading, setLoading] = useState(true);

  const parseLocalizacao = (localizacao: string) => {
    const [latStr, lonStr] = localizacao.split(',');
    return {
      latitude: parseFloat(latStr.trim()),
      longitude: parseFloat(lonStr.trim()),
    };
  };

  useEffect(() => {
    buscarSensores()
      .then(setSensores)
      .catch((err) => Alert.alert('Erro', err.message || 'Erro ao carregar sensores'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#0B6E4F" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -15.793889,
          longitude: -47.882778,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        {sensores.map((sensor) => {
          const coord = parseLocalizacao(sensor.localizacao);
          return (
            <Marker
              key={sensor.sensorId}
              coordinate={coord}
              title={`Sensor: ${sensor.tipo}`}
              description={`Região ID: ${sensor.regiaoId}`}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  center: { justifyContent: 'center', alignItems: 'center' },
});
