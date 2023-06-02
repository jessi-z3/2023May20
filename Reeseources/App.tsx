import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home';
import BookList from './components/BookList';
import HelpScreen from './components/HelpScreen';
import Activities from './components/Activities';
import Quiz from './components/Quiz';
import Coloring from './components/Coloring';
import ColoringPage from './components/ColoringPage';
import Writing from './components/Writing';
import PDF from './components/PDF';
// import ReportBullying from './components/ReportBullying';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="PDF" component={PDF} />
        <Stack.Screen name='HelpScreen' component={HelpScreen} />
        <Stack.Screen name='BookList' component={BookList} />
        {/* <Stack.Screen name='Report' component={ReportBullying} /> */}
        <Stack.Screen name='Activities' component={Activities} />
        <Stack.Screen name='Quiz' component={Quiz} />
        <Stack.Screen name='Coloring' component={Coloring} />
        <Stack.Screen name='ColoringPage' component={ColoringPage} />
        <Stack.Screen name='Writing' component={Writing} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
