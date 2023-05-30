import { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, Button, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";


function Settings({ navigation }) {
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
        <StatusBar style="auto" />
        <Switch
          value={theme === 'light'}
          onValueChange={toggleTheme}
        />
        <Button
        title="Ga naar Home"
        onPress={() => navigation.navigate('HomeScreen')}
        />
        <Button
          title="Convert"
          onPress={() => navigation.navigate('Convert')}
        />
      </View>
    </ThemeContext.Provider>
  );
}

function HomeScreen({ navigation }) {
  const storedTheme = localStorage.getItem("THEME");
  const [theme] = useState(storedTheme); 
  return (
    <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
      <Text style={theme === 'light' ? styles.text : [styles.text, {color: 'white'}]}>Homepagina</Text>
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

function Convert ({ navigation }) {
  const storedTheme = localStorage.getItem("THEME");
  const [theme] = useState(storedTheme);
  return (
    <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
      <Text style={theme === 'light' ? styles.text : [styles.text, {color: 'white'}]}>Hier komt uiteindelijk de converteer functionaliteit</Text>
      <Button
        title="Ga naar Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button
        title="Ga naar settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Settings" 
          component={Settings} />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} />
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
  },
});