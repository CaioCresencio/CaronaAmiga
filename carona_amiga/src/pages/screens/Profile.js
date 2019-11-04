import React, { Component } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Alert
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';


import styles from '../styles/stylesMain'


export default class Caronas extends Component {
    sair = async () => {
        await AsyncStorage.clear();
        await AsyncStorage.removeItem('USER');
        this.props.navigation.navigate('Login')
    };
    eu = async ()=>{
        const token = await AsyncStorage.getItem("USER");
        const teste = JSON.parse(token);
        Alert.alert(token)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Perfil do usuario</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.eu()}>
                    <Text style={styles.buttonText}>MOSTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.sair()}>
                    <Text style={styles.buttonText}>SAIR</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
