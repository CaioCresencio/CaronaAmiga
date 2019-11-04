import React from 'react'
import { ScrollView, View, FlatList, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import RouteB from '../images/routeB.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../pages/styles/colors'
import axios from 'axios'
import { server, showErrorLogin } from '../common'
import AsyncStorage from '@react-native-community/async-storage';
const dados1 = {
    offerRide: [
        {
            nameP: 'Caio Cresencio',
            location_i: 'IFSP - Estacionamento ao lado esquerdo',
            location_f: 'Centro, Rua 7',
            time_exit: '11:35',
        },
        {
            nameP: 'Fábio pittas',
            location_i: 'UFScar - Departamento Fisica',
            location_f: 'Centro - São carlos raefafaefaefe',
            time_exit: '10:20',
        },
        {
            nameP: 'Diourgnes Afonso',
            location_i: 'IFSP - Biblioteca',
            location_f: 'Roxo',
            time_exit: '12:00',

        },
        {
            nameP: 'Caio Cresencio',
            location_i: 'IFSP - Estacionamento ao lado esquerdo',
            location_f: 'Centro, Rua 7',
            time_exit: '11:35',
        },
        {
            nameP: 'Fábio pittas',
            location_i: 'UFScar - Departamento Fisica',
            location_f: 'Centro - São carlos raefafaefaefe',
            time_exit: '10:20',
        },
        {
            nameP: 'Diourgnes Afonso',
            location_i: 'IFSP - Biblioteca',
            location_f: 'Roxo',
            time_exit: '12:00',

        },

    ]
}

export default class ListRides extends React.Component {
    constructor(props) {
        super(props);
        this.getListRides()
    }

    getListRides = async () => {
        const user = await AsyncStorage.getItem("USER");
        const token_json = JSON.parse(user);
        token = token_json.token.token;

        const config = {
            'headers': { 'Authorization': 'Bearer '+token }
        }

        await axios.get(`${server}/rides/`, config)
            .then((response) => {
               console.log(response.data)
            }).catch((error) => {
                Alert.alert(error.message)
            })

    }

    handleDetails(item) {
        this.props.navigation.navigate('RidesDetails', item);
    }
    render() {
        const renderItem = ({ item }) => {
            return <Ride {...item} />
        }
        const Ride = (props) =>
            <View style={styles.box_rides}>
                <TouchableOpacity onPress={() => this.handleDetails(props)}>
                    <View style={styles.box_item}>
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={styles.box_person}>
                                    <Icon name="person-pin" size={20} color={colors.secundary} />
                                    <Text> {props.nameP}</Text>
                                </View>
                            </View >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.box_time}>
                                    <Icon name="access-time" size={15} color={colors.light} />
                                    <Text style={{ color: '#fff' }}> {props.time_exit}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.location_box}>
                            <View style={styles.position_box}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Saída</Text>
                                <Text style={styles.text_location}>{props.location_i}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={RouteB} style={{ width: 40, height: 40, padding: 5 }} />
                            </View>
                            <View style={styles.position_box}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Destino</Text>
                                <Text style={styles.text_location}>{props.location_f}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >

        return (
            <ScrollView>
                <FlatList data={dados.offerRide} renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()} />
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    location_box: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
    text_location: {
        justifyContent: 'center',
        textAlign: 'center'
    },
    position_box: {
        flex: 4,
        paddingHorizontal: 15,
    },
    box_time: {
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#fff',
    },
    box_person: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    box_item: {
        marginHorizontal: 20,
        marginTop: 30,
        flexDirection: 'column',
        backgroundColor: '#e6e6e6',
        minHeight: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        textAlign: 'center',
    },
    textBox: {
        color: '#CCC',
        textAlign: 'center',
        flexDirection: 'column',
    },
    box_rides: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
    },

})