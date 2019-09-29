import React, {useState}  from 'react'
import {View, Text, StyleSheet,TextInput,TouchableOpacity, Image, Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Logo from '../../images/logo.png'
import styles from '../styles/styles'
import colors from '../styles/colors'

import axios from 'axios'
import {server,showError} from '../../common'

export default class Cadastro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username:''}
        this.state = {email: ''}
        this.state = {password:''}
        this.state = {university_id:''}
    };

    handleRegister(){
        axios.post(`${server}/users`,{username:this.state.username, email:this.state.email, password:this.state.password, university_id:this.state.university_id})
        .then( (response) => {
            console.log(response.data)
            this.props.navigation.navigate('Login')
        }).catch( (error) => {
            showError('Preencha corretamente os campos' )
        })
  
    }
    handleLogin(){
        this.props.navigation.navigate('Login')
    }
    render(){
        return (
            <View style={{flex:1, backgroundColor:colors.secundary}}>
                <View style={styles.container}>
                    <Image source={Logo} style={{marginBottom:10, width:200, height:200}}/>
                    <View style={styles.inputContainer}>
                        <Icon name="account-box" size={20} color="#999"/>
                        <TextInput placeholder="Usuário:"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.username}
                            onChangeText={(username) => this.setState({username})}
                            placeholderTextColor="#999"
                            style={styles.input}
                            >
                        </TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="email" size={20} color="#999"/>
                        <TextInput placeholder="E-mail:"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.email}
                            onChangeText={ (email) => this.setState({email})}
                            placeholderTextColor="#999"
                            style={styles.input}
                            >
                        </TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="school" size={20} color="#999"/>
                        <TextInput placeholder="Prontuário:"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.university_id}
                            onChangeText={(university_id) => this.setState({university_id})}
                            placeholderTextColor="#999"
                            style={styles.input}
                            >
                        </TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={20} color="#999"/>
                        <TextInput placeholder="Senha:"
                            autoCapitalize="none"
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}
                            autoCorrect={false}
                            placeholderTextColor="#999"
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleRegister()}>
                        <Text style={styles.buttonText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.register} onPress={() => this.handleLogin()}>
                        <Text style={styles.registerText}>Voltar para o
                            <Text style={{fontWeight:'bold'}}> LOGIN</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
