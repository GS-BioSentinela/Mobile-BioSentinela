import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="alerta" options={{ title: 'Alertas Ativos' }} />
      <Tabs.Screen name="mapa" options={{ title: 'Mapa de Focos' }} />
      <Tabs.Screen name="sos" options={{ title: 'SOS' }} />
      <Tabs.Screen name="configuracoes" options={{ title: 'Configurações' }} />
    </Tabs>
  );
}
