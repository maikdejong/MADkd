import React from 'react';
import { StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";

import { myColors } from "./src/styles/Colors";
import Convert from "./src/views/Convert";
import History from "./src/views/History";
import Homescreen from "./src/views/homeScreen";

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