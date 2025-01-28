import { View, Text, Image } from 'react-native';
import "@/global.css";
import React from 'react';

export default function Profile() {
  return (
    <View className="bg-background flex-1">
      
      <Image
        source={require('@/assets/images/Mayank.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      />

      <View >
        <Text className="text-2xl font-bold text-text ">
          Mayank Tripathi
        </Text>
      </View>
    </View>
  );
}
