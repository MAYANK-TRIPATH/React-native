import React from 'react';
import { View } from 'react-native';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import "@/global.css";

const Tab = createMaterialTopTabNavigator();

export default function Index() {
  return (
   
    <View className="flex-1 ">
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#0F172A", // Dark background for the TabBar
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#FFFFFF", // White indicator for dark mode
          },
          tabBarLabelStyle: {
            color: "#FFFFFF", // White text for tab labels
          },
        }}
      >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Projects" component={Projects} />
      </Tab.Navigator>
    </View>
  );
}
