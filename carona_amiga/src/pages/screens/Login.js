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
//export default function Login({navigation}) {
    constructor(props) {
        super(props);
        this.state = { showAlert: false };
        this.state = {email: ''};
        this.state = {password: ''};

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

 
    handleLogin(){
        let _this = this;
        firebase.auth()
            .signInWithEmailAndPassword(_this.email,_this.password)
            .then((user) => {
               
                if(user){
                    this.hideAlert();
                    this.props.navigation.navigate('Burger');
                }
            })
            .catch( (error) =>{
                console.log(error);
            })
            
    }

    handleRecuperar(){
        if(email){
            firebase.auth().sendPasswordResetEmail(email)
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
                <TouchableOpacity style={styles.button} onPress={() => {this.handleLogin(); this.showAlert()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.register} onPress={() => handleRecuperar()}>
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
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
            />
        </ImageBackground>

        
    )
    }
}


