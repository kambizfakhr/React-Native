import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , FlatList } from 'react-native';

export default function App() {
 const [people , setPeople] = useState([
   {name:'behzad',id:'1'},
   {name:'reza',id:'2'},
   {name:'nariman',id:'3'},
   {name:'roshan',id:'4'},
   {name:'shahin',id:'5'},
   {name:'hoseyn',id:'6'},
   {name:'behzad',id:'12'},
   {name:'reza',id:'22'},
   {name:'nariman',id:'32'},
   {name:'roshan',id:'42'},
   {name:'shahin',id:'52'},
   {name:'hoseyn',id:'62'},
 ])
  return (
    <View style={styles.container}>
       <ScrollView>
        {people.map(item =>(
          <View key={item.key}>
            <Text style={styles.item}> {item.name}</Text>
          </View>
        ))}
       </ScrollView> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
  },
  btnUpdate:{
    marginTop:20,
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
  }

});
