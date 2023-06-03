import React, {useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {myColors} from "../styles/Colors";
import SelectList from "../components/selectList";
import {Input} from "native-base";
import convert from "convert-units";

const Convert = ({ navigation }) => {
  const storedTheme = localStorage.getItem("THEME");
  const [theme] = useState(storedTheme);
  const massList = convert().list('mass')
  return (
    <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
      <Text style={theme === 'light' ? styles.text : [styles.text, {color: 'white'}]}>Hier komt uiteindelijk de converteer functionaliteit!</Text>
      <View>

        <SelectList unitData={massList} />
        <Input keyboardType="numeric" />
        <SelectList unitData={massList} />
        
        <Button
            title="Go Home"
            onPress={() => navigation.navigate('Homescreen')}
            color={'#143F46'}
          />
          <Button
            title="Go to History"
            onPress={() => navigation.navigate('History')}
            color={'#143F46'}
          />
        </View>
      </View>
  );
}


  export default Convert;

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