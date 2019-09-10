import React, { Component } from 'react'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import {Dimensions} from 'react-native'
//Pages
import Caronas from '../pages/screens/Caronas'
import CaronasDisponiveis from '../pages/screens/CaronasDisponiveis'
//Componentes
import MenuButton from './MenuButton'
import firebase from '../firebase/firebase';
import DrawerContainer from './DrawerContainer'



    const FirstActivity_StackNavigator = createStackNavigator({
        First:{
            screen: Caronas,
            navigationOptions: ({ navigation }) => ({
                title: 'Caronas',
                headerLeft: <MenuButton navigationProps={navigation} />,
                headerStyle: {
                    backgroundColor: '#0066CC',
                },
                headerTintColor: '#fff',
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
                    backgroundColor: '#0066CC',
                },
                headerTintColor: '#fff',
            }),
        }
        
    })

    const WIDTH = Dimensions.get('window').width 
    const Drawer = createDrawerNavigator({
        Caronas: {
            screen: FirstActivity_StackNavigator},
        CaronasDisponiveis: {
            screen: SecondActivity_StackNavigator }
        },{
            drawerWidth: WIDTH*0.60,
            contentComponent: DrawerContainer
        });
    export default Drawer