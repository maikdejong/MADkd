import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Switch, Button, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import { NativeBaseProvider } from "native-base";
import SelectList from './SelectList';


// `allMeasures` includes all the measures packaged with this library
// import configureMeasurements from 'convert-units';
// import allMeasures from 'convert-units/definitions/all';
// const convert = configureMeasurements(allMeasures);

// convert().from('ons').possibilities();
// // [ 'pond', 'g', 'kg', 'ton' ]

// convert().from('pond').possibilities();
// // [ 'ons', 'g', 'kg', 'ton' ]

// convert().from('g').possibilities();
// // [ 'ons', 'pond', 'kg', 'ton' ]

// convert().from('kg').possibilities();
// // [ 'ons', 'pond', 'g', 'ton' ]

// convert().from('ton').possibilities();
// // [ 'ons', 'pond', 'g', 'kg' ]

// async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
//   if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//   }
//   await FileSystem.downloadAsync(
//     Asset.fromModule(require(pathToDatabaseFile)).uri,
//     FileSystem.documentDirectory + 'SQLite/MADB.db'
//   );
//   return SQLite.openDatabase('MADB.db');
// }

// Moet nog ergens een MADB.db file aanmaken, bovenstaande functie fixen (is typescript onzin ofzo, bestand .tsx maken fixt het absoluut niet).
// Metro.config.js file moet at the root of your project (is misschien al zo who knows)

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

function Convert ({ navigation }) {
  const storedTheme = localStorage.getItem("THEME");
  const [theme] = useState(storedTheme);
  return (
    <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: myColors.black}]}>
      <Text style={theme === 'light' ? styles.text : [styles.text, {color: 'white'}]}>Hier komt uiteindelijk de converteer functionaliteit!</Text>
      <View>
        <SelectList/>
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
            name="Homescreen" 
            component={Homescreen} 
            options={{
              headerStyle: {
                backgroundColor: '#143F46',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="History" 
            component={History} 
            options={{
              headerStyle: {
                backgroundColor: '#143F46',
              },
              headerTintColor: '#fff',
            }}
            />
          <Stack.Screen 
            name="Convert" 
            component={Convert} 
            options={{
              headerStyle: {
                backgroundColor: '#143F46',
              },
              headerTintColor: '#fff',
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
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

  Button: {
    backgroundColor: '#143F46',
  },
});