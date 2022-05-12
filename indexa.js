import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Agenda() {
    return(
        <View style={styles.container}>
            <Text style={styles}>PAGINA AGENDA</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
    }
});