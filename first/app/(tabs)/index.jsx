import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Mayank from "@/assets/images/Mayank.png"

const app = () => {
  return (
    
    <View style={styles.container}>
      <ImageBackground
    source={Mayank}
    resizeMode='cover'
    style={styles.image}
    ></ImageBackground>
      <Text style={styles.text}>Mayank Tripathi</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image:{
width: "100%",
height: "100%",

  },
  text: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
  }


})