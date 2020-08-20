// React Import
import React from 'react';
// navigation Container and Stack Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 // Pages
 import Main from './pages/Main';
 import Profile from "./pages/Profile";
import { StyleSheet } from 'react-native';

// init createStackNavigator in Stack Constant
const Stack = createStackNavigator();

function Routes(){ 
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={StyleSheet.create({
            headerStyle: {
              backgroundColor: "#7D40E7",
            },
            headerTitleAlign: {
              alignContent: "center",
            },
            headerTitleStyle:{
                color: "#fff"
            }
          })}
        >
          <Stack.Screen component={Main} name="DevRadar" />
          <Stack.Screen component={Profile} name="Perfil no Github" />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default Routes;