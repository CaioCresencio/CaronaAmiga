import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:30,
    },
    inputContainer:{
        flexDirection: 'row',
        marginTop:8,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:4,
        paddingHorizontal:15,
    },
    input: {
        flex:1,
        height:45,
        alignSelf:'stretch', 
        paddingLeft:10,
    },

    button:{
        height:45,
        alignSelf:'stretch',
        backgroundColor:'#0066CC',
        borderRadius:4,
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
        color:'#A0A0A0',
        fontSize:14,

    },
    
})

export default styles;