import React, { FC } from 'react';
import { Box } from '@/src/components/ui/box';
import { Text } from '@/src/components/ui/text';

const History: FC = () => {
  console.log('History');

  return (
    <Box className="flex-1 justify-center items-center bg-green-200">
      <Text>History</Text>
    </Box>
  );
};

export default History;
