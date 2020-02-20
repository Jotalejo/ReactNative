import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text:'Banano'},
    {id: uuid(), text:'Guacamole'},
    {id: uuid(), text:'Kiwi'},
    {id: uuid(), text:'Mora'},
    {id: uuid(), text:'Piña'},
    {id: uuid(), text:'Arandano'},
  ]);

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  });
}

const addItem = (text) => {
  if(!text) {
    Alert.alert(
      'Error',
      'Favor Ingrese un Elemento Valido',
      [
        {text: 'Preguntar después', onPress: () => console.log('Preguntar después presionado')},
        {
          text: 'Cancelar',
          onPress: () => console.log('Presionar Cancel'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Presionado')},
      ],
      {cancelable: false},
    );
  } else {
    setItems(prevItems => {
      return [{id: uuid(), text},...prevItems];
    });
  }
  
}

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => (
           <ListItem item={item} deleteItem={deleteItem} />
        )}
        />
    </View>
  );    
};
//renderItem={({item}) => <ListItem item={item} /> }

// renderItem={({item}) => <Text>{item.text}</Text>}  Es una forma de mostrar los items

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },    
});

export default App;
