import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert
} from 'react-native'



import styles from '../styles/stylesMain'


export default class Caronas extends Component {

    render(){ 
        return (
        <View style={styles.container}>
            <Text>Perfil do usuario</Text>
            <TouchableOpacity style={styles.button} onPress={chamar}>
                    <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
        )
    }
}
