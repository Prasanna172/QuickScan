import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native';

import {Home,Scanner,CropView} from './Views';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'QuickScan' ,headerTintColor: '#3779ea' ,headerTitleStyle: { alignSelf: 'center' }}}/>
        <Stack.Screen name="Scanner" component={Scanner} options={{headerShown: false}}/>
        <Stack.Screen name="CropView" component={CropView} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
