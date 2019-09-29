import React from 'react'
import { StyleSheet } from 'react-native'
import colors from './colors'
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:55,
    },
    inputContainer:{
        flexDirection: 'row',
        marginTop:8,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:3,
        paddingHorizontal:15,
    },
    input: {
        flex:1,
        height:40,
        alignSelf:'stretch', 
        paddingLeft:10,
    },

    button:{
        height:40,
        alignSelf:'stretch',
        backgroundColor: colors.primary,
        borderRadius:3,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
    },

    buttonText:{
        color:"#FFF",
        fontWeight:'bold',
        fontSize:16,
    },
    register:{
        marginTop:10,
    },
    registerText:{
        color:colors.regular,
        textAlign:'center',
        fontSize:14,

    },
    
})

export default styles;