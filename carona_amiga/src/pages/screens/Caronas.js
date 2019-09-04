import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert
} from 'react-native'

import axios from 'axios'
import {server, showError} from '../../common'

import styles from '../styles/stylesMain'


export default class Caronas extends Component {

    render(){
        chamar = async () => { 
            const res = await axios.get(` ${server}/cars/1`);
            Alert.alert(JSON.stringify(res.data));
        }                
        
        return (
        <View style={styles.container}>
            <Text>Hello Caronas </Text>
            <TouchableOpacity style={styles.button} onPress={chamar}>
                    <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
        )
    }
}
