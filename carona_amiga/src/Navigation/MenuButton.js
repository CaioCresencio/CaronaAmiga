import React from 'react'
import {StyleSheet,TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../pages/styles/colors'

export default class MenuButton extends React.Component{
    render(){
    
        return(
            <View style={styles.bar}>
                <TouchableOpacity  onPress={this.props.navigationProps.openDrawer}>
                    <Icon style={styles.menuIcon} name="reorder" size={28} color={colors.light}/>
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        marginLeft:10,
    },
    bar:{
        flexDirection: 'row',
    },

})