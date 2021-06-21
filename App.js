/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './src/screens/Chat';
import Conversation from './src/screens/Conversation';

const Stack = createStackNavigator();



const App = () => {

 
  return (
    // <SafeAreaView>
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Conversation" component={Conversation} />
    </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
