import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

export default function Mapa() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -15.793889,
          longitude: -47.882778,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        <Marker coordinate={{ latitude: -15.8, longitude: -47.9 }} title="Foco Ativo" />
      </MapView>
    </View>
  );
}
