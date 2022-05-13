import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function BotaoMenuImg() {
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    box:{
        height: 300,
        backgroundColor:'pink',
        margin: 7,
        borderRadius: 5
    }
});