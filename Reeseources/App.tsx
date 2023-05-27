import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MissionPage from './components/MissionPage';
import BravePage from './components/BravePage';
import PledgePage from './components/PledgePage';
import ProgramPage from './components/ProgramPage';
import Help from './components/Help';
import Home from './components/Home';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="MissionPage" component={MissionPage} />
        <Stack.Screen name="Program" component={ProgramPage} />
        <Stack.Screen name="BRAVE" component={BravePage} />
        <Stack.Screen name='Pledge' component={PledgePage} />
        <Stack.Screen name='Help'component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
