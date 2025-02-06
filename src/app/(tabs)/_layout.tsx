import { Tabs } from 'expo-router';
import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';

const TabLayout = () => (
  <Tabs

  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'PagesSpeed Insights',
        headerTitleAlign: 'center',
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
      }}
    />
    <Tabs.Screen
      name="history"
      options={{
        title: 'Historial de métricas',
        headerTitleAlign: 'center',
        tabBarIcon: ({ color }) => <AntDesign name="filetext1" size={24} color={color} />,
      }}
    />
  </Tabs>
);

export default TabLayout;
