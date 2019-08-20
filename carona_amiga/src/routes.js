import {createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import Login from './pages/screens/Login'
import Cadastro from './pages/screens/Cadastro'
import Burger from './components/BurgerNavigation'

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Cadastro,
        Burger,
    })
)