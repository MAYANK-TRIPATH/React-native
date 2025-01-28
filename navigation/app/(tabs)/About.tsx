import { View, Text, Button, Linking } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'


export default function About()  {
  return (
    <View className="flex-1 bg-background text-text">
      <Text className="font-bold text-lg justify-center items-center h-[50px] text-text">
      Hi, This is Mayank Tripathi      
      </Text>
      <Text className="font-semibold text-text justify-end items-end">
      Dedicated and a proactive engineer specializing in information technology 
      and also freelancer, equipped with comprehensive skills in the Full stack.
      Demonstrated ability to deliver high-quality results within deadlines,
      both independently and collaboratively. Known for dependability, reliability,
      and a strong work-ethic. Committed to utilizing technical expertise and
      problem-solving skills to contribute to innovative projects and achieve 
      successful outcomes in dynamic team environments.
      </Text>
      <Button title='Web Site'
      color="#f194ff"
      onPress={() => Linking.openURL('https://mayanktripathi.site')}
      />

    </View>
  )
}

