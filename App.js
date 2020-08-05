import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import AppHeader from './assets/appheader';
import StoryScreen from './screens/StoryWritingScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppHeader/>
        <AppContainer /> 
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: StoryScreen},
  ReadStory: {screen: SearchScreen},
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
