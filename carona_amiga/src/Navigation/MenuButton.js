import React from 'react'
import {StyleSheet,TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class MenuButton extends React.Component{
    render(){
    
        return(
            <View style={styles.bar}>
                <TouchableOpacity  onPress={this.props.navigationProps.openDrawer}>
                    <Icon style={styles.menuIcon} name="reorder" size={28} color="#000"/>
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        marginLeft:5,
    },
    bar:{
        flexDirection: 'row',
    },

})