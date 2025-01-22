import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function About()  {
  return (
    <View>
      <Text>This is about us page </Text>
      <Link href={"/accounts"}>
      <Text>Button to acc</Text>
      </Link>
    </View>
  )
}

