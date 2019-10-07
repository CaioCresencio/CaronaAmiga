import React from 'react'
import { StyleSheet, Text, View, Image ,TouchableOpacity, ScrollView} from 'react-native'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AwesomeAlert from 'react-native-awesome-alerts';
import Logo from '../images/logo.png'

export default class DrawerContainer extends React.Component {
    constructor(props) {
        super(props);
		this.state = { showAlertMessage: false };
	}
	showAlertMessage = () =>{
		this.setState({
			showAlertMessage:true,
		})
	}
	hideAlertMessage = () => {
        this.setState({
          showAlertMessage: false
        });
	  };
	  
  render() {
	const { navigation } = this.props
	const {showAlertMessage} = this.state;
	
    return (
    	<View style={styles.container}>
    		<View style={styles.top}>
				<Image source={Logo} style={{ width:120, height:120}}/>
			</View>
        	<View style={styles.menu}>
				<ScrollView>
					<TouchableOpacity style={styles.box_menu} onPress={() => navigation.navigate('Caronas')}>
						<Icon name="directions-walk" style={styles.menu_icon} />
						<Text style={styles.menu_text}>Solicitar Carona</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.box_menu} onPress={() => navigation.navigate('CaronasDisponiveis')}>
						<Icon name="directions-car" style={styles.menu_icon} />
						<Text style={styles.menu_text}>Oferecer Carona</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.box_menu} onPress={() => navigation.navigate('Rides')}>
						<Icon name="view-list" style={styles.menu_icon} />
						<Text style={styles.menu_text}>Todas as caronas</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.box_menu} onPress={() => navigation.navigate('CaronasDisponiveis')}>
						<Icon name="account-circle" style={styles.menu_icon} />
						<Text style={styles.menu_text}>Perfil</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity onPress={() => this.showAlertMessage()}>				
					<Text style={styles.text_footer}> Voltar para a tela de Login</Text>
				</TouchableOpacity>
			</View>
			<AwesomeAlert
				show={showAlertMessage}
				showProgress={false}
				overlayStyle={{backgroundColor: 'rgba(152,152,152,0.0)'}}
				contentContainerStyle={
					{backgroundColor: '#4F4F4F', width:200,marginTop:240}
				}
				titleStyle={{color:'#fff',fontWeight:'bold'}}
				messageStyle={{color:'#FFF'}}
				cancelButtonStyle={{color:'#FFF',backgroundColor:'#00468C'}}
				confirmButtonStyle={{color:'red',backgroundColor:'red'}}
                title={'Sair'}
                message={'Você realmente deseja sair?'}
                closeOnTouchOutside={true}
				showConfirmButton={true}
				showCancelButton={true}
				cancelText="Não, cancelar"
				confirmText="Sim, sair!"
                closeOnHardwareBackPress={true}
                onConfirmPressed={() => {
					this.hideAlertMessage();
					signOut_();
				  }}
				onCancelPressed={() => {
					this.hideAlertMessage();
				}}
            />

		</View>
    )
  }
}

const styles = StyleSheet.create({
	
  top: {
    flex:2,
	backgroundColor:'#f1f1f1',
	margin:0,
	padding:0,
	borderBottomWidth:1,
	borderColor:'#CCC',
	flexDirection:'column',
	justifyContent:'center',
	alignItems:'center',
  },
  userName:{
	fontSize:12,
	marginBottom:10
  },
  menu_iconUser:{
	fontSize:80,
	color:'#00468C'
  },
  footer:{
	flex:1,
	backgroundColor:'#f1f1f1',
	borderTopWidth:1,
	borderColor:'#CCC',
  },
  text_footer:{
	paddingTop:15,
	textAlign:'center',
	justifyContent:'center',
	fontSize:13,
	fontWeight:'600',
	color:'#008db3',

  },
  menu:{
	flex:8,
	backgroundColor:'#f1f1f1',
  },  
  menu_text:{
	paddingLeft:10,
	fontWeight:'100',
	color:'#999',
	fontSize:14
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  box_menu:{
	  padding:10,
	  marginTop:10,
	  color:'#f2f2f2',
	  flexDirection: 'row',
	  paddingHorizontal:20,
  },
  menu_icon:{
	color:'#008db3',
	fontSize:20,
  },
  
})