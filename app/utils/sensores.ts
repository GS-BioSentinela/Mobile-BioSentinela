import api from './api';

export type Sensor = {
  tipo: string;
  localizacao: string; // ex: "-15.80,-47.90"
  regiaoId: number;
  sensorId: number;
};

export async function buscarSensores(): Promise<Sensor[]> {
  const response = await api.get('/sensores');
  return response.data;
}
