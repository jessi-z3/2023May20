import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MissionPage from './components/MissionPage';
import BravePage from './components/BravePage';
import PledgePage from './components/PledgePage';
import ProgramPage from './components/ProgramPage';
import Home from './components/Home';
import BookList from './components/BookList';
import HelpScreen from './components/HelpScreen';
import Activities from './components/Activities';
import Quiz from './components/Quiz';
// import ReportBullying from './components/ReportBullying';

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
        <Stack.Screen name='HelpScreen' component={HelpScreen} />
        <Stack.Screen name='BookList' component={BookList} />
        {/* <Stack.Screen name='Report' component={ReportBullying} /> */}
        <Stack.Screen name='Activities' component={Activities} />
        <Stack.Screen name='Quiz' component={Quiz} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
