import { Box } from '@/src/components/ui/box';
import { Text } from '@/src/components/ui/text';
import React, { FC } from 'react';

const Home: FC = () => {
  console.log('Home');

  return (
    <Box className="flex-1 justify-center items-center bg-green-200">
      <Text className="text-2xl">Hola mundo como estas</Text>
    </Box>
  );
};

export default Home;
