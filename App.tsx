import React from 'react';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Login } from "./src/pages/Login"
import { Chat } from "./src/pages/Chat"
import { Group } from "./src/pages/Group"
import { CreateGroup } from "./src/pages/CreateGroup"

import Provider, { useAppState } from "./Context"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const GroupNavigator = () =>  {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Groups" options={{ headerShown: false }} component={Group} />
      <Stack.Screen name="CreateGroup" options={{ headerShown: false }} component={CreateGroup} />
    </Stack.Navigator>


  );
}


const MainNavigator = () =>  {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Group" options={{ headerShown: false }} component={GroupNavigator} />
      <Stack.Screen name="Chat" options={{ headerShown: false }} component={Chat} />
    </Stack.Navigator>

  );
}

const App: any = () => {

  const appState: any = useAppState()

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        {appState.isSignedIn ? (
          <>
            <Stack.Screen name="Main" options={{ headerShown: false }} component={MainNavigator} />

          </>
        ) : (
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />

          </>
        )}

      </Stack.Navigator>
  </NavigationContainer>

  );
};


export default App;
