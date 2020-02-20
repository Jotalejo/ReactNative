import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

// En la línea de <Text style={styles.text}>{props.title}</Text> el título se puede
//   pasar como props o de varias formas.  En la declaración de la constante va:
//   const Header = (props) => {

// Otra forma de colocar el título: const Header = ({title}) => { , y en el <Text/> :
//   <Text style={styles.text}>{title}</Text>
//

 Header.defaultProps = {
     title: 'Lista de compras COLBERRY',
 };

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',    
  }
});

export default Header;
