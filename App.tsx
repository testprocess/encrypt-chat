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

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Login } from "./src/pages/Login"
import { Chat } from "./src/pages/Chat"
import { Group } from "./src/pages/Group"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const onPressLearnMore = () => {
  Alert.alert("dd")
}

const Main = () =>  {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Group" options={{ headerShown: false }} component={Group} />
        <Tab.Screen name="Chat" options={{ headerShown: false }} component={Chat} />
      </Tab.Navigator>

  );
}



const App = () => {

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Main" options={{ headerShown: false }} component={Main} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
