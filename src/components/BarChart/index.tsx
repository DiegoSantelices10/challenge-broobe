import { Dimensions } from 'react-native';
import React, { FC } from 'react';
import { Box } from '../ui/box';
import { BarChart as BarChartUI } from 'react-native-chart-kit';
import { IBarChartProps } from './types';

const BarChart: FC<IBarChartProps> = (props) => {
  const {
    viewData,
  } = props;

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF', // white background
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFFFFF', // white background
    backgroundGradientToOpacity: 0,
    color: () => `#547fdb`, // light blue bars
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#e6e6e6',
    },

  };

  return (
    <Box className="flex justify-center items-center p-4 ">
      {viewData.labels.length > 0 && (
        <BarChartUI
          data={viewData}
          width={Dimensions.get('window').width - 40}
          height={220}
          showValuesOnTopOfBars
          yAxisSuffix="%"
          yAxisLabel=""
          chartConfig={chartConfig}
        />
      )}
    </Box>
  );
};

export default BarChart;
