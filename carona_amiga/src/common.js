import { Alert, Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const server = Platform.OS === 'ios' ? 'http://localhost/333' : 'http://10.0.3.2:3333';

function showErrorLogin(error) {
    if (error.response.status == 401) {
        Alert.alert('Ops! Informações de login incorretas.')
    } else if (error.response.status == 400) {
        var erro = error.response.data.lenght > 1 ? "Os seguintes campos precisam ser preenchidos: " : "O seguinte campo precisa ser preenchido corretamente: "

        error.response.data.forEach(element => {
            erro += ' ' + element.field;
        });
        Alert.alert(erro)
    } else {
        Alert.alert(erro)
    }

}


    function storeData(key, item) {
        async () => {
            try {
                await AsyncStorage.setItem(key, item)
            } catch (e) {
                Alert.alert(e)
            }
        }
    }


    export { server, showErrorLogin, storeData }
