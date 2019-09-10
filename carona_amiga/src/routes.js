import {createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import Login from './pages/screens/Login'
import Register from './pages/screens/Register'
import Drawer from './Navigation/DrawerNavigation'

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Drawer,
    })
)