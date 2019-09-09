   import React from 'react'
   import {View, SafeAreaView,Button, createAppContainer, createDrawerNavigator,   createStackNavigator,DrawerItems
    } from 'react-navigation'
    import {Dimensions} from 'react-native'
    import Caronas from '../pages/screens/Caronas'
    import CaronasDisponiveis from '../pages/screens/CaronasDisponiveis'
import MenuButton from './MenuButton';
import firebase from '../firebase/firebase';
import DrawerContainer from '../components/DrawerContainer'

    const WIDTH = Dimensions.get('window').width;
    const BurgerConfig = {
        drawerWidth: WIDTH*0.83,
    }

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

    const signOut_ = function(){
        firebase.auth().signOut().then(function() {
            console.log("DIUORGNES")
        }).catch(function(error) {
            // An error happened.
        });
    }
    const Burger = createDrawerNavigator({
        Caronas: {
            screen: FirstActivity_StackNavigator
        },
        CaronasDisponiveis: {
            screen: SecondActivity_StackNavigator
        },
        contentComponent: DrawerContainer

    });


  
    export default Burger