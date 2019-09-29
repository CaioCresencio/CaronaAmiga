import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import colors from '../styles/colors'


export default class Caronas extends Component {
    render(){
        const dados = {
            offerRide:[
                {
                    nameP:'Caio Cresencio',
                    location_i:'IFSP - Estacionamento',
                    location_f: 'Centro, Rua 7',
                    time_exit: '11:35',
                },
                {
                    nameP:'Frodo Bergamim',
                    location_i:'UFScar - Departamento Fisica',
                    location_f: 'Centro - São carlos',
                    time_exit: '10:20',
                },
                {
                    nameP:'Diourgnes Afonso',
                    location_i:'IFSP - Biblioteca',
                    location_f: 'Roxo',
                    time_exit: '12:00',
                
                }
            ]    
        }
        return (
            
            <View style={styles.box_rides}>
                <View style={styles.box_item}>
                    <Text style={{textAlign:'center'}}>{dados.offerRide[0].nameP}
                    {dados.offerRide[0].location_i}
                    {dados.offerRide[0].location_f}</Text>
                </View>
                <View style={styles.box_item}>
                    <Text style={{textAlign:'center'}}>{dados.offerRide[1].nameP}
                    {dados.offerRide[1].location_i}
                    {dados.offerRide[1].location_f}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box_rides:{
        flex:1,
    
        flexDirection:'column',
        backgroundColor:colors.light,
    },
    box_item:{
        marginHorizontal:40,
        marginTop:30,
        borderRadius:3,
        minHeight:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,
        
        elevation: 2,
        textAlign:'center',
    }
})