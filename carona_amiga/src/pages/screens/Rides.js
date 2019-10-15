import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListRides from '../../components/ListRides'
import RidesDetails from '../../components/RideDetail'

const RootStack = createStackNavigator(
    {
      ListRides: ListRides,
      RidesDetails: RidesDetails,
    },
  
  );
  
  const AppContainer = createAppContainer(RootStack);
  
export default class Caronas extends Component {
    render() {

        return (
            <AppContainer />
        )
    }
}
