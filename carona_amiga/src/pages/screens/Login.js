import React, {useState} from 'react'
import {View, Text, StyleSheet,TextInput,TouchableOpacity, Image, ImageBackground,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Car from '../../images/car.png'
import Background from '../../images/background.png'
import styles from '../styles/styles'
import firebase from '../../firebase/firebase'
import AwesomeAlert from 'react-native-awesome-alerts';
 
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showAlert: false };
        this.state = {email: ''};
        this.state = {password: ''};
        this.state ={showAlertMessage:false};
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
        this.showAlert();
        if(this.state.email && this.state.password){
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email,this.state.password)
                .then((user) => {
                    if(user){ 
                        this.hideAlert();
                        this.props.navigation.navigate('Burger');
                    }else{
                        this.showAlertMessage(error.code);
                    }
                })
                .catch( error =>{
                    this.hideAlert();
                    let errorMessage;
                    switch(error.code){
                        case "auth/wrong-password":
                            errorMessage="Senha incorreta!"
                            break;
                        case "auth/user-not-found":
                            errorMessage="Email não cadastrado!"
                            break;
                            
                        case "auth/invalid-email":
                            errorMessage="Email inválido"
                            break;
                        default: 
                            errorMessage="Erro inesperado!"
                    }
                    
                    this.showAlertMessage(errorMessage,'Ops');
                })
        }else{
            this.hideAlert();
            this.showAlertMessage("Preencha todos os campos","Campos invalidos!");

        }
            
    }

    handleRecover(){
        if(this.state.email){
            firebase.auth().sendPasswordResetEmail(this.state.email)
                .then(function() {
                    //Email sent.
                }).catch(function(error) {
                    // An error happened.
                });
        }
    }
    handleRegister(){
        this.props.navigation.navigate('Cadastro')
    }
    render(){
        const {showAlert} = this.state;
        const {showAlertMessage : showAlertMessage} = this.state;
        const {showAlertRecover} = this.state;
    return (
        <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <Image source={Car} style={{marginBottom:10}}/>
                <View style={styles.inputContainer}>
                    <Icon name="email" size={20} color="#999"/>
                    <TextInput placeholder="Digite seu email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        placeholderTextColor="#999"
                        style={styles.input}
                        >
                    </TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="#999"/>
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
        </ImageBackground>

        
    )
    }
}


