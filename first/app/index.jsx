import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Mayank from "@/assets/images/Mayank.png"
import { Link} from "expo-router"

const app = () => {
  return (
    
    <View style={styles.container}>
      <ImageBackground
    source={Mayank}
    resizeMode='cover'
    style={styles.image}
    >
<Text style={styles.text}>Mayank Tripathi</Text>
<Link style={styles.link} href="/explore">Link</Link>
    </ImageBackground>
      
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
    color: 'Red',
    fontSize: 42,
    fontWeight: 'bold',
    flex: 1,
  },
  link: {
    color: 'Blue',
    fontSize: 42,
    fontWeight: 'bold',
    flex: 1,
  }


})