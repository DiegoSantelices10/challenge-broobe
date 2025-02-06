import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToHistoryMetrics = async (newMetric: any) => {
  try {
    const existingData = await AsyncStorage.getItem('historyMetrics');
    const history = existingData ? JSON.parse(existingData) : [];
    history.push(newMetric);

    await AsyncStorage.setItem('historyMetrics', JSON.stringify(history));
  } catch (error) {
    console.error('Error al guardar en historyMetrics:', error);
  }
};

export const getHistoryMetrics = async () => {
  try {
    const data = await AsyncStorage.getItem('historyMetrics');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error al obtener historyMetrics:', error);
    return [];
  }
};

export const clearHistoryMetrics = async () => {
  try {
    await AsyncStorage.removeItem('historyMetrics');
  } catch (error) {
    console.error('Error al limpiar historyMetrics:', error);
  }
};

export const clearHistoryMetricById = async (id: string) => {
  try {
    const storedData = await AsyncStorage.getItem('historyMetrics');

    if (storedData) {
      const historyMetrics = JSON.parse(storedData);
      const updatedMetrics = historyMetrics.filter((item: any) => item.id !== id);

      await AsyncStorage.setItem('historyMetrics', JSON.stringify(updatedMetrics));
    }
  } catch (error) {
    console.error('Error al eliminar el ítem de historyMetrics:', error);
  }
};
