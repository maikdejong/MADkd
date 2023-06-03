import React, {useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {myColors} from "../styles/Colors";

function History({ navigation }) {
  const storedTheme = localStorage.getItem("THEME");
  const [theme] = useState(storedTheme); 
  return (
    <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
      <Text style={theme === 'light' ? styles.text : [styles.text, {color: 'white'}]}>Hier kan je de bestel/convert geschiedenis bekijken!</Text>

      <View>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('Homescreen')}
          color={'#143F46'}
        />
        <Button
          title="Convert"
          onPress={() => navigation.navigate('Convert')}
          color={'#143F46'}
        />
      </View>
    </View>
  );
}   

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
  },

  Button: {
    backgroundColor: '#143F46',
  },
});