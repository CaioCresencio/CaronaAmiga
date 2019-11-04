import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

//Pages
import Caronas from '../pages/screens/Caronas'
import RequestRide from '../pages/screens/RequestRide'
import Profile from '../pages/screens/Profile'

//Style

import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../pages/styles/colors'

//Components

import ListRides from '../components/ListRides'
import RidesDetails from '../components/RideDetail'



const stackConfig = {
	headerLayoutPreset: 'center',
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#27304f',
		},
		headerTintColor: '#FFF',
	}
}

const FirstActivity_StackNavigator = createStackNavigator(
	{
		First: {
			screen: Caronas,
			navigationOptions: ({ navigation }) => ({
				title: 'Inicio',
			}),
		}
	},
		stackConfig
);
const Rides_StackNavigator= createStackNavigator(
		{
			RequestRide: {
				screen: RequestRide,
				navigationOptions: ({ navigation }) => ({
					title: 'Caronas',
				}),
			}
		},
			stackConfig
);
const ListRides_StackNavigator = createStackNavigator(
	{
		ListRides: {
			screen: ListRides,
			navigationOptions: ({ navigation }) => ({
				title: 'Caronas',
			}),
		},
		RidesDetails: {
			screen: RidesDetails,
			navigationOptions: ({ navigation }) => ({
				title: 'Detalhes da carona',
			}),
		}
	},
		stackConfig
);

const Profile_StackNavigator = createStackNavigator(
	{
		Profile: {
			screen: Profile,
			navigationOptions: ({ navigation }) => ({
				title: 'Perfil',
			}),
		}
	},
		stackConfig
);


const AppNavigator = createBottomTabNavigator(
	{
		Caronas: {
			screen: FirstActivity_StackNavigator,
			navigationOptions: () => ({
				title: 'Inicio',
				tabBarIcon:({ tintColor}) =>(
					<Icon  name="home" size={18} color={tintColor} />
				),
			}),
		},
		RequestRide: {
			screen: Rides_StackNavigator,
			navigationOptions: () => ({
				title: 'Carona',
				tabBarIcon:({ tintColor}) =>(
					<Icon name="directions-car" size={18} color={tintColor} />
				),
			}),
		},
		Rides: {
			screen: ListRides_StackNavigator,
			navigationOptions: () => ({
				title: 'Listar',
				tabBarIcon:({ tintColor}) =>(
					<Icon name="view-list" size={18} color={tintColor} />
				),
			}),
		},
		Profile: {
			screen:Profile_StackNavigator,
			navigationOptions: () => ({
				title: 'Perfil',
				tabBarIcon:({ tintColor}) =>(
					<Icon name="account-box" size={18} color={tintColor} />
				),
			}),
		},

	},
	{
		tabBarOptions: {
			keyboardHidesTabBar:true,
			activeTintColor: colors.primary,
			inactiveTintColor: colors.secundar,
			style:{
				backgroundColor:colors.secundary,
			}
		},
	}
);
export default AppNavigator