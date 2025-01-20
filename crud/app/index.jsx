import { TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

const [text, onChangeText] = React.useState("Todos");


  return (
    <SafeAreaView>
      <TextInput style={styles.Text} 
      onChangeText={onChangeText}
      value={text}/>
    <Button title="Submit"
    onPress={submit}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Text:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})