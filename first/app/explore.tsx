import React from 'react'
import {View, Text, StyleSheet,TextInput } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'

function explore() {
  return (
    <View>
      <Text style={styles.texts}>
        <h1>CONTACT-US</h1>
      </Text>
      <SafeAreaView >
        <TextInput style={styles.form}
        value='text'
        />
      <TextInput style={styles.form}
        value='text'
        />
        <TextInput style={styles.form}
        value='password'
        />
        
      </SafeAreaView>
      
    </View>
  )
}


export default explore

const styles = StyleSheet.create({
texts:{
color: "white"
},
form:{
  color: 'white',
  borderBlockColor: 'white',
  borderColor: 'white'
}
})

