import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput,TouchableOpacity,
     Image, ImageBackground, KeyboardAvoidingView, Alert} from 'react-native'

import Logo from '../../images/logo.png'
import Background from '../../images/background.png'
//Styles
import styles from '../styles/styles'
import colors from '../styles/colors'

import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/MaterialIcons'

//Server
import axios from 'axios'
import {server, showErrorLogin} from '../../common'


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showAlert: false }
        this.state = {email: ''}
        this.state = {password: ''}
        this.state ={showAlertMessage:false}
        this.state = {_message:''}
        this.state = {_title:''}
        this.state ={showAlertRecover:false}
      };
    
    showAlert = () => {
        this.setState({
          showAlert: true
        });
      };

      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };
      showAlertRecover = () => {
        this.setState({
            showAlertRecover: true
        });
      };
      
      hideAlertRecover = () => {
        this.setState({
            showAlertRecover: false
        });
      };

      showAlertMessage= (message, title) =>{
          this.setState({
              _message:message,
              _title:title,
              showAlertMessage:true,
            
          })
      }
      hideAlertMessage = () => {
        this.setState({
          showAlertMessage: false
        });
      };
    
 
    handleLogin(){
       /* axios.post(`${server}/sessions`,{email:this.state.email, password:this.state.password})
        .then( (response) => {
            console.log(response.data)
            this.props.navigation.navigate('AppNavigator')
        }).catch( (error) => {
             showErrorLogin(error)
        })*/
        this.props.navigation.navigate('AppNavigator')
    }

    handleRecover(){
       /* if(this.state.email){
            firebase.auth().sendPasswordResetEmail(this.state.email)
                .then(function() {
                    //Email sent.
                }).catch(function(error) {
                    // An error happened.
                });
        }*/
    }
    handleRegister(){
        this.props.navigation.navigate('Register')
    }
    render(){
        const {showAlert} = this.state;
        const {showAlertMessage : showAlertMessage} = this.state;
        const {showAlertRecover} = this.state;
        return (
         
            <View style={{backgroundColor:colors.secundary, flex:1}}>
                 {/* <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>*/}
                <View style={styles.container}>
                    <Image source={Logo} style={{ width:200, height:200}}/>
                    <View style={styles.inputContainer}>
                        <Icon name="email" size={20} color={colors.secundary}/>
                        <TextInput placeholder="Digite seu email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={this.state.email}
                            onChangeText={(email) => this.setState({email})}
                            placeholderTextColor="#999"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={20} color={colors.secundary}/>
                        <TextInput placeholder="Digite sua senha"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            autoCorrect={false}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                            placeholderTextColor="#999"
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleLogin()}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleRegister()}>
                        <Text style={styles.buttonText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.register} onPress={() => this.state.email?this.showAlertRecover():this.showAlertMessage('Campo de email vazio!','Ops')}>
                        <Text style={styles.registerText}>Caso não lembre da sua senha,  
                            <Text style={{fontWeight:'bold'}}> CLIQUE AQUI!</Text>
                        </Text>
                    </TouchableOpacity> 
                </View>
                {/*</KeyboardAvoidingView>*/}
               
                <AwesomeAlert
                    show={showAlert}
                    showProgress={true}
                    title="Realizando login"
                    message="Carregando..."
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={true}
                />
                <AwesomeAlert
                    show={showAlertMessage}
                    showProgress={false}
                    title={this.state._title}
                    message={this.state._message}
                    closeOnTouchOutside={true}
                    showConfirmButton={true}
                    confirmText="OK"
                    closeOnHardwareBackPress={false}
                    onConfirmPressed={() => {
                        this.hideAlertMessage();
                    }}
                />

                <AwesomeAlert
                    show={showAlertRecover}
                    title="Recuperar senha"
                    message={`O email será enviado para:${this.state.email}`}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    showCancelButton={true}
                    cancelText="Cancelar"
                    confirmText="Enviar"
                    onConfirmPressed={() => {
                        this.hideAlertRecover();
                        this.handleRecover();
                    }}
                    onCancelPressed={() => {
                        this.hideAlertRecover();
                    }}
                />
            </View>  
       
        )}
}


