import React from 'react'
import {View, Text, StyleSheet,TextInput,TouchableOpacity, Image, ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Car from '../../images/car.png'
import Background from '../../images/background.png'
import styles from '../styles/styles'


export default function Cadastro({navigation}) {

    function handleRegister(){
        navigation.navigate('Login')
    }
 
    
    return (
        <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <Image source={Car} style={{marginBottom:10}}/>
                <View style={styles.inputContainer}>
                    <Icon name="account-box" size={20} color="#999"/>
                    <TextInput placeholder="Usuário:"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor="#999"
                        style={styles.input}
                        >
                    </TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="email" size={20} color="#999"/>
                    <TextInput placeholder="E-mail:"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor="#999"
                        style={styles.input}
                        >
                    </TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="school" size={20} color="#999"/>
                    <TextInput placeholder="Prontuário:"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholderTextColor="#999"
                        style={styles.input}
                        >
                    </TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="#999"/>
                    <TextInput placeholder="Senha:"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        autoCorrect={false}
                        placeholderTextColor="#999"
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register} onPress={handleRegister}>
                    <Text style={styles.registerText}>Voltar para o
                        <Text style={{fontWeight:'bold'}}> LOGIN</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
