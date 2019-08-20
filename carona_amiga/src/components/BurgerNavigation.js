   import React from 'react'
   import {createAppContainer, createDrawerNavigator,   createStackNavigator,
    } from 'react-navigation'
    import {Dimensions} from 'react-native'
    import Caronas from '../pages/screens/Caronas'
    import CaronasDisponiveis from '../pages/screens/CaronasDisponiveis'
import MenuButton from './MenuButton';

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

    const Burger = createDrawerNavigator({
        Caronas: {
            screen: FirstActivity_StackNavigator
        },
        CaronasDisponiveis: {
            screen: SecondActivity_StackNavigator
        }
        
        
    });
    export default Burger