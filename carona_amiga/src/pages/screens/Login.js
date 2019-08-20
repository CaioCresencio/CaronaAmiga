import React, {useState} from 'react'
import {View, Text, StyleSheet,TextInput,TouchableOpacity, Image, ImageBackground,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Car from '../../images/car.png'
import Background from '../../images/background.png'
import styles from '../styles/styles'

export default function Login({navigation}) {
    const [user,setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        if(user == '' && password == ''){
           navigation.navigate('Burger');
        }else{
            navigation.navigate('Cadastro')
        }
        
    }

    return (
        <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <Image source={Car} style={{marginBottom:10}}/>
                <View style={styles.inputContainer}>
                    <Icon name="email" size={20} color="#999"/>
                    <TextInput placeholder="Digite seu email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={user}
                        onChangeText={setUser}
                        placeholderTextColor="#999"
                        style={styles.input}
                        >
                    </TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="#999"/>
                    <TextInput placeholder="Digite sua senha"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        autoCorrect={false}
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor="#999"
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register} onPress={handleLogin}>
                    <Text style={styles.registerText}>Caso não tenha uma conta,  
                        <Text style={{fontWeight:'bold'}}> CLIQUE AQUI!</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
