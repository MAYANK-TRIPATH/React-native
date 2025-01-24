import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function About()  {
  return (
    <View>
      <Text className="bg-slate-600 text-white">This is about us page </Text>
      <Link href={"/accounts"}>
      <Text className="rounded-sm bg-blue-500">Button to acc</Text>
      </Link>
    </View>
  )
}

