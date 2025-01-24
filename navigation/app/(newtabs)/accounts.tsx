import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const accounts = () => {
  return (
    <SafeAreaView>
    <View className="bg-slate-500 justify-center items-center">
      <Text className="text-white font-semibold">This is Accounts section</Text>
    </View>
    </SafeAreaView>
  )
}

export default accounts