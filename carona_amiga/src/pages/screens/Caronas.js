import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert
} from 'react-native'

import axios from 'axios'
import {server, showError} from '../../common'

import styles from '../styles/stylesMain'
import colors from '../styles/colors'
import MenuButton from '../../Navigation/MenuButton'


export default class Caronas extends Component {

    render(){
        chamar = async () => { 
            const res = await axios.get(` ${server}/cars/1`);
            Alert.alert(JSON.stringify(res.data));
        }                
        
        return (
        <View style={{backgroundColor:colors.lighter, flex:1, justifyContent:'center'}}>
          
        </View>
        )
    }
}
