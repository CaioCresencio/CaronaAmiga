import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../pages/styles/colors'
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'

export default class RideDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const name = this.props.navigation.getParam('nameP');
        const location_i = this.props.navigation.getParam('location_i');
        const location_f = this.props.navigation.getParam('location_f');
        const time_exit = this.props.navigation.getParam('time_exit');

        return (
            <View style={{flex:1}}>
                <View style={{flex:4}}>
                    <View style={styles.box_person}>
                        <Icon name="person-pin" size={20} color={colors.secundary} />
                        <Text>{name}</Text>
                    </View>
                    <View style={styles.box_location}>
                        <View style={styles.item_location}>
                            <Icon name="location-on" size={20} color={colors.secundary} />
                            <Text style={{ marginLeft: 5 }}>Local da sáida: {location_i}</Text>
                        </View>
                        <View style={styles.item_location }>
                            <Icon name="location-on" size={20} color={colors.secundary} />
                            <Text style={{ marginLeft: 5 }}>Local da sáida: {location_f}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'flex-end',paddingVertical:10}}>
                    <View style={styles.box_buttons}>
                        <View style={styles.item_button}>
                            <TouchableOpacity style={styles.button_voltar}>
                                <Text style={{color:colors.secundary, textAlign:'center'}}>Voltar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.item_button}>
                            <TouchableOpacity style={styles.button_aceitar}>
                                <Text style={{color:colors.white, textAlign:'center',}}>Oferecer Carona</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button_voltar:{
        backgroundColor:colors.light, 
        borderRadius:3,
        width:130,
        paddingVertical:5,
        marginHorizontal:15,
        borderWidth:1,
        borderColor:'#ccc'
    },
    button_aceitar:{
        backgroundColor:colors.secundary,
        paddingVertical:6,
        borderRadius:3,
        paddingHorizontal:5,
        width:130,
        
    },
    item_button:{
        flex:1,
        alignItems:'center'
    },
    box_buttons:{
        flexDirection:'row',
        marginHorizontal:40,
        justifyContent:'space-between'
    }, 
    box_person: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 30,
        marginVertical:10,
        borderRadius:3,
        borderBottomWidth:1,
        borderColor: '#ccc'
    },
    box_location: {
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 5,
    },
    item_location:{
        flex: 1, 
        alignItems:'center', 
        borderRadius:3,
        borderBottomWidth:1,
        borderColor: '#ccc',
        padding:10,
    }
})

