import { Tabs } from 'expo-router';
import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';

const TabLayout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
    }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
      }}
    />
    <Tabs.Screen
      name="history"
      options={{
        title: 'History',
        tabBarIcon: ({ color }) => <AntDesign name="filetext1" size={24} color={color} />,
      }}
    />
  </Tabs>
);

export default TabLayout;
