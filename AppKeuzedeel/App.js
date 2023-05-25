import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Homepagina</Text>
      <Button
        title="Ga naar settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Convert"
        onPress={() => navigation.navigate('Convert')}
      />
    </View>
  );
}

function Settings({ navigation }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
        <Text style={theme === 'light' ? styles.text : [styles.text, {color: 'white'}]}>Switch Theme</Text>
        <StatusBar style="auto" />
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
      </View>
    </ThemeContext.Provider>
  );
}

function Convert ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hier komt uiteindelijk de converteer functionaliteit</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} />
        <Stack.Screen 
          name="Settings" 
          component={Settings} />
        <Stack.Screen 
          name="Convert" 
          component={Convert} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
  }
});