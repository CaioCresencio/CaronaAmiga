import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { View, Alert } from 'react-native'
import {createRootNavigator} from '../routes'

export default class AuthLogin extends React.Component {
    state = {
        signed: false,
        signLoaded: false,
      };
    
     isSignedIn = async () => {
        const token = await AsyncStorage.getItem("USER");
      
        return (token !== null) ? true : false;
      };
      componentWillMount() {
        this.isSignedIn()
          .then(res => this.setState({ signed: res, signLoaded: true }))
          .catch(err => alert("Erro"));
      }
    
      render() {
        const { signLoaded, signed } = this.state;
    
        if (!signLoaded) {
          return null;
        }
    
        const Layout = createRootNavigator(signed);
        return <Layout />;
      }
}
