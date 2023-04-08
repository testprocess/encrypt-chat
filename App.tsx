import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  View

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "./src/pages/Login"
import { Chat } from "./src/pages/Chat"

const Stack = createNativeStackNavigator();


const onPressLearnMore = () => {
  Alert.alert("dd")
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Chat" options={{ headerShown: false }} component={Chat} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
