import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>      
        <Ionicons name="ios-trending-down" size={20} color="firebrick" onPress={() => deleteItem(item.id) } />
     </View>
    </TouchableOpacity>
  );
};

{/* <Image      --> esto es para las imagenes, pero toca importar Image en el react-native y toca
                    evaluar como se puede acceder al disco duro virtual de Godaddy.
        source={require('https://n3plcpnl0159.prod.ams3.secureserver.net:2078/JOTALEJO_SW_SISTEMAS/Colberry/Imagenes/arandano_liof.jpg')}
        fadeDuration={0}
        style={{width: 20, height: 20}}/> */}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#f00',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize:15,
  },
});

export default ListItem;
