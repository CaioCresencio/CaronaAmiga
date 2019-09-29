import React, {Component} from 'react'
import { View, Text, StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../styles/styles'
import colors from '../styles/colors'

export default class CaronasDisponiveis extends Component {
    render(){
        return (
        <View style={styles.container, {backgroundColor:colors.secundary, flex:1}}>
            <Text>Hello Caronas disponiveis</Text>
        </View>
        )
    }
}




