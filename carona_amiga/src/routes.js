import { createAppContainer, createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Alert } from 'react-native'
import Login from './pages/screens/Login'
import Register from './pages/screens/Register'
import AppNavigator from './Navigation/AppNavigator'
import AsyncStorage from '@react-native-community/async-storage';


const auth = async () => {
    Alert.alert('AEEAA')
    try {
        Alert.alert('entrou2')
        const value = await AsyncStorage.getItem('USER')
        if (value !== null) {
            Alert.alert('possui')
            return true;
        } else {
            Alert.alert('N possui')
            return false;
        }
    } catch (e) {
        Alert.alert('Erro no AsyncStorage!')
        return false;
    }
}
const isSignedIn = async () => {
    const token = await AsyncStorage.getItem('USER');

    if (token !== null) {
        Alert.alert('true')
        return true;
    } else {
        // Alert.alert('false')
        return false;
    }
};

const confere = async () => {
    const confere = await isSignedIn();
    if (confere) {
        Alert.alert('entrou')
        return "AppNavigator"
    } else {
        // Alert.alert('nao entrou')
        return "OnSign"
    }

}
const OnSign = createSwitchNavigator({
    Login: { screen: Login },
    Register: { screen: Register }
}
)
/*export default createAppContainer(
    createSwitchNavigator({
        OnSign,
        AppNavigator,
    },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: confere(),
            navigationOptions: {
                gesturesEnabled: false
            }
        }
    )
)*/

export const createRootNavigator = (signedIn = false) => {
    return createAppContainer(createSwitchNavigator({
        OnSign,
        AppNavigator,
    },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn? 'AppNavigator': 'OnSign',
            navigationOptions: {
                gesturesEnabled: false
            }
        }
    ))

}