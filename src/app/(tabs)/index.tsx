import runPagespeedAdapters from '@/src/adapters/runPagespeed';
import BarChart from '@/src/components/BarChart';
import { IData } from '@/src/components/BarChart/types';
import Button from '@/src/components/custom/Button';
import useShowToast from '@/src/components/custom/Toast';
import SearchForm from '@/src/components/SearchForm';
import { Box } from '@/src/components/ui/box';
import { Center } from '@/src/components/ui/center';
import { Spinner } from '@/src/components/ui/spinner';
import { Text } from '@/src/components/ui/text';
import { VStack } from '@/src/components/ui/vstack';
import { transformData, generateRandomId } from '@/src/utils';
import { addToHistoryMetrics } from '@/src/utils/asyncStorage';
import React, { FC, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';

const Home: FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IData>({
    labels: [],
    datasets: [{ data: [] }],
  });

  const { showNewToast } = useShowToast();

  const {
    control,
    getValues,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      url: '',
      category: ['SEO'],
      strategy: 'MOBILE',
    },
  });

  const onSubmit = async ({ url, strategy, category }: FieldValues) => {
    setIsLoading(true);
    await runPagespeedAdapters.runPagespeed({
      url,
      strategy,
      category,
      successCallback: ({ data: { lighthouseResult: { categories }}}) => {
        const result = transformData(categories);
        setData(result);
      },
      errorCallback: () => {},
      finallyCallback: () => setIsLoading(false),
    });

  };

  const onSavedMetrics = (value: any) => {
    const url = getValues('url');
    const strategy = getValues('strategy');
    const metric = {
      id: generateRandomId(),
      url,
      metrics: value,
      strategy,
    };
    addToHistoryMetrics(metric);
    showNewToast('Guardado en el storage');
  };

  return (
    <Box className="flex-1 p-4 bg-white py-10">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Box className="grid gap-20">
          <SearchForm
            control={control}
            onSubmit={onSubmit}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
          <VStack>
            {isLoading ?
              <Center className="flex-1 grid gap-4">
                <Spinner size={30} />
                <Text className="text-lg font-semibold">Analizando</Text>
              </Center>
              : <BarChart viewData={data} />
            }
            {data.labels.length > 0 && !isLoading && (
              <Button
                textButton="Guardar métricas"
                onPress={() => onSavedMetrics(data)}
              />
            )}
          </VStack>
        </Box>
      </ScrollView>
    </Box>

  );
};

export default Home;
