import React, { Component } from 'react'
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../styles/styles'
import colors from '../styles/colors'
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select'

import InputText from '../../components/InputText'

export default class RequestRide extends Component {
    constructor(props) {
        super(props)

    }

    state = {
        date: new Date(),
        show: false,
        location_init: '',
        location_end: '',
    }


    setDate = (event, date) => {
        date = date || this.state.date;
        this.setState({ date, show: false })
    }
    show = () => {
        this.setState({
            show: true,
        });
    }

    showHour = () => {
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    confirmUniversity = (item) => {
        return item

    }

    changeLocationInit = (value) => {
        this.setState({
            location_init: value,
        })
    }
    changeLocationEnd = (value) => {
        this.setState({
            location_end: value,
        })
    }
    render() {
        const { date, show } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ margin: 20, fontWeight: '600', textAlign: 'center', fontSize: 20 }}>
                    Informe os dados para solicitar uma carona!
                </Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginBottom: 10 }}>
                    <View style={{
                        flex: 2, paddingLeft: 10, borderWidth: 1,
                        borderColor: colors.light,
                    }}>
                        <RNPickerSelect
                            onValueChange={(item) => { this.confirmUniversity(item) }}
                            placeholder={{
                                label: 'Selecione seu campus',
                                value: null,
                                color: '#9EA0A4',
                            }}
                            items={[
                                { label: 'UFSCar - São Carlos', value: 'ufscar' },
                                { label: 'IFSP - Araraquara', value: 'ifsp' },
                            ]}

                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={this.show} style={{ paddingLeft: 10 }}>
                            <View style={styles.inputButtonTime}>
                                <Icon name="access-time" size={20} color={colors.secundary} />
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={`${date.getHours()}:${date.getMinutes()}`}
                                    onChangeText={this.showHour}
                                    placeholderTextColor="#999"
                                    editable={false}
                                    style={styles.input}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, }}>


                    <InputText placeholder='Local de sáida' inputValue={this.location_init} icon='place' changeValue={this.changeLocationInit} />
                    <InputText placeholder='Local de destino' inputValue={this.location_end} icon='map' changeValue={this.changeLocationEnd} />

                    <View style={{
                         borderWidth: 1,
                        borderColor: colors.light
                    }}>
                        <RNPickerSelect
                            onValueChange={(item) => { this.confirmUniversity(item) }}
                            placeholder={{
                                label: 'Quantidade de pessoas ',
                                value: null,
                                color: '#9EA0A4',
                            }}
                            items={[
                                { label: 'Apenas eu', value: '1' },
                                { label: 'Duas pessoas', value: '2' },
                                { label: 'Três pessoas', value: '3' },
                                { label: 'Quatro pessoas', value: '4' },
                            
                            ]}

                        />
                    </View>

                    <View style={{ flexDirection: 'column' }}>

                    </View>

                    {show && <View>
                        <DateTimePicker
                            value={date}
                            mode={'time'}
                            is24Hour={true}
                            display="clock"
                            onChange={this.setDate}

                        />
                    </View>}
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: 10 }}>
                    <View style={style.box_buttons}>
                        <View style={style.item_button}>
                            <TouchableOpacity style={style.button_voltar}>
                                <Text style={{ color: colors.secundary, textAlign: 'center' }}>Limpar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={style.item_button}>
                            <TouchableOpacity style={style.button_aceitar}>
                                <Text style={{ color: colors.white, textAlign: 'center', }}>Solicitar Carona</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    button_voltar: {
        backgroundColor: colors.light,
        borderRadius: 3,
        width: 130,
        paddingVertical: 5,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    button_aceitar: {
        backgroundColor: colors.secundary,
        paddingVertical: 6,
        borderRadius: 3,
        paddingHorizontal: 5,
        width: 130,

    },
    item_button: {
        flex: 1,
        alignItems: 'center'
    },
    box_buttons: {
        flexDirection: 'row',
        marginHorizontal: 40,
        justifyContent: 'space-between'
    },


})
