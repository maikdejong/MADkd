import React, {useEffect, useState} from 'react';
import { ThemeContext } from "../context/ThemeContext";
import {Button, StyleSheet, Switch, Text, View} from "react-native";
import {myColors} from "../styles/Colors";

function Homescreen({ navigation }) {
    const storedTheme = localStorage.getItem("THEME");
    const [theme, setTheme] = useState(storedTheme);
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    useEffect(() => {
      localStorage.setItem("THEME", theme);
    }, [theme]);
  
    return (
      <ThemeContext.Provider value={theme}>
        <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
          <Text style={theme === 'light' ? styles.text : [styles.text, {color: 'white'}]}>Switch Theme</Text>
          <Switch
            value={theme === 'light'}
            onValueChange={toggleTheme}
          />
        </View>
        <View>
          <Button
          title="Go to History"
          onPress={() => navigation.navigate('History')}
          color={'#143F46'}
          buttonStyle={{ width: 150 }}
          containerStyle={{ margin: 5 }}
          />
          <Button
            title="Convert"
            onPress={() => navigation.navigate('Convert')}
            color={'#143F46'}
          />
        </View>
      </ThemeContext.Provider>
    );
  }


  export default Homescreen;

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