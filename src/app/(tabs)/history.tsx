import React, {
  FC, useCallback, useState,
} from 'react';
import { Box } from '@/src/components/ui/box';
import { clearHistoryMetricById, getHistoryMetrics } from '@/src/utils/asyncStorage';
import { Text } from '@/src/components/ui/text';
import { FlatList } from 'react-native';
import { IData } from '@/src/components/ContentHistory/types';
import BarChart from '@/src/components/BarChart';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable } from '@/src/components/ui/pressable';
import useShowToast from '@/src/components/custom/Toast';
import { useFocusEffect } from '@react-navigation/native';

const History: FC = () => {

  const [renderData, setRenderData] = useState<IData[]>([]);
  const { showNewToast } = useShowToast();

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  const getData = async () => {
    const result = await getHistoryMetrics();
    setRenderData(result);
  };

  const deleteItem = async (id: string) => {
    await clearHistoryMetricById(id);
    getData();
    showNewToast('Eliminado con exito');

  };

  return (
    <Box className="flex-1 justify-center items-center bg-white">
      <Box className="p-4">
        {renderData.length > 0 ? (
          <FlatList
            data={renderData}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            renderItem={({ item }) => (
              <Box className="border border-gray-200 rounded-">
                <Box className="flex flex-row justify-between items-center p-4">
                  <Text className="text-lg font-semibold">{item.url}</Text>
                  <Pressable onPress={() => deleteItem(item.id)}>
                    <AntDesign name="delete" size={24} color="#f14646" />
                  </Pressable>
                </Box>
                <Box className="w-full h-0.5 bg-gray-200"/>
                <Box className="pt-4">
                  <BarChart viewData={item.metrics} />
                </Box>
              </Box>
            )}
          />
        ): (
          <Box className="flex-1 justify-center items-center">
            <Text className="text-lg font-semibold">Sin historial para mostrar</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default History;
