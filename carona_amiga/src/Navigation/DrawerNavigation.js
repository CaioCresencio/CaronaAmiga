import React, { Component } from 'react'
import { createDrawerNavigator, createStackNavigator, createAppContainer ,createBottomTabNavigator , View} from 'react-navigation'

import {Dimensions} from 'react-native'
//Pages
import Caronas from '../pages/screens/Caronas'
import CaronasDisponiveis from '../pages/screens/CaronasDisponiveis'
import Rides from '../pages/screens/Rides'
//Componentes
import MenuButton from './MenuButton'

import DrawerContainer from './DrawerContainer'
//Style

import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../pages/styles/colors'


   const FirstActivity_StackNavigator = createStackNavigator({
        First:{
            screen: Caronas,
            navigationOptions: ({ navigation }) => ({
                title: 'Caronas',
                headerLeft: <MenuButton navigationProps={navigation} />,
                /*headerStyle: {
                    backgroundColor: colors.secundary,
                    borderBottomColor:colors.transparent,
                    borderBottomWidth: 0,
                },
                headerTintColor: colors.white
                header: null,*/
            }),
        }
    })
    const SecondActivity_StackNavigator = createStackNavigator({
        CaronasDisponiveis:{
            screen: CaronasDisponiveis,
            navigationOptions: ({ navigation }) => ({
                title: 'Caronas Disponiveis',
                headerLeft: <MenuButton navigationProps={navigation} />,
                headerStyle: {
                   // backgroundColor: colors.primary,
    
                },
                headerTintColor: colors.white,
            }),
        }
    })
    const Rides_StackNavigator = createStackNavigator({
        Rides:{
            screen: Rides,
            navigationOptions: ({ navigation }) => ({
                title: 'Caronas',
                headerLeft: <MenuButton navigationProps={navigation} />,
                headerStyle: {
                    //backgroundColor: colors.primary,
    
                },
                headerTintColor: colors.white,
            }),
        }
    })


    const WIDTH = Dimensions.get('window').width 
    /*const Drawer = createDrawerNavigator({
        Caronas: {
            screen: FirstActivity_StackNavigator},
        CaronasDisponiveis: {
            screen: SecondActivity_StackNavigator },
        Rides: {
            screen: Rides_StackNavigator},
        },{
            drawerWidth: WIDTH*0.60,
            contentComponent: DrawerContainer
        });
        */
    const Drawer = createBottomTabNavigator(
        {
            Caronas: {
                screen: FirstActivity_StackNavigator,    
                navigationOptions: () => ({
                  title: 'Caronas'
                }),
            },   
            CaronasDisponiveis: {
                screen: SecondActivity_StackNavigator,
                navigationOptions: () => ({
                    title: 'Caronas'
                  }), 
            },
            Rides: {
                screen: Rides_StackNavigator,
                navigationOptions: () => ({
                    title: 'Caronas',
                    tabBarIcon: <Icon name="home" size={18} color="#000" />
                  }),
            },    
                
        },{
            drawerWidth: WIDTH*0.60,
            contentComponent: DrawerContainer
        }
    );
    export default Drawer