import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Button , TextInput } from 'react-native';

export default function App() {
  const [name , setName]=useState('kafa');
  const pressHandler= () => {
    setName('Behzad Fakhr')
  }
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      onChangeText={(value) => setName(value)}
      keyboardType="email-address"
      multiline={true}
      selectionColor='#f0f'
      />
      <Text>my name is: {name}</Text>
      <View style={styles.btnUpdate}>
      <Button title='Update Name' onPress={pressHandler} />
    </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnUpdate:{
    marginTop:20,
  },
  input:{
    borderWidth: 1,
    borderColor: 777,
    padding:5 ,
    margin: 10,
    width:200,
    height: 300
  },

});
