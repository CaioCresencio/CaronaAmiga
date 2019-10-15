import {createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import Login from './pages/screens/Login'
import Register from './pages/screens/Register'
import AppNavigator from './Navigation/AppNavigator'

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        AppNavigator,
    })
)