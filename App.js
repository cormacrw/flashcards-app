/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DeckFormScreen from './src/screens/DeckFormScreen';
import { createStackNavigator } from '@react-navigation/stack'
import FavouriteScreen from './src/screens/FavouriteScreen';
import DeckViewerScreen from './src/screens/DeckViewerScreen';
import DeckInfoScreen from './src/screens/DeckInfoScreen';
import seed from './src/data/seed';
import Datasource from './src/data/Datasource';
import runSql from './src/data/utils/runSql';
import selectSql from './src/data/utils/selectSql';

const initDB = async () => {
  // const datasource = await Datasource.getDatasource()
  await seed()
}

const test = async () => {
  const dbConn = await Datasource.getDatasource()

  const results = await selectSql(dbConn, 'SELECT * FROM `user`;', [])
}

// test()
// initDB()
const Stack = createStackNavigator()

const App = () => {

  // return (
  //   <SafeAreaView>
  //     <HomeScreen />
  //   </SafeAreaView>
  // );
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DeckForm" component={DeckFormScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
        <Stack.Screen name="DeckViewer" component={DeckViewerScreen} />
        <Stack.Screen name="DeckInfo" component={DeckInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App