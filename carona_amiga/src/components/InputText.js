import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

//Styles
import styles from '../pages/styles/styles'
import styled from 'styled-components';
import colors from '../pages/styles/colors'


export default props => {
    return (
        <View style={{}}>
            <InputContainer>
                <IconBox>
                    <Icon name={props.icon} size={20} color={colors.secundary} />
                </IconBox>
                <TextBox>
                    <TextInput
                        placeholder={props.placeholder}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={props.inputValue}
                        onChangeText={(text) => props.changeValue(text)}
                        placeholderTextColor="#999"
                        style={styles.input}
                    />
                </TextBox>
            </InputContainer>
        </View>
    )
}

const IconBox = styled.View`
	flex: 1;
	background-color: papayawhip;
    justify-content: center;
    background-color:#f6f6f6;
    align-items: center;
    border:1px solid #dddd;
`;
const InputContainer = styled.View`
    border-radius:3;
    flex-direction: row;
    display:flex;
    min-height:50px;
    margin-bottom:10px;
`;

const TextBox = styled.View`
    flex:6;
    border:1px solid #dddd;
    margin-left:10px;
    justify-content: flex-end;
`;
