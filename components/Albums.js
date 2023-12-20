import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';


export default function Movies(props) {
    
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}>
                <Text>{props.id}</Text>
            </TouchableOpacity>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <Button style={styles.button} icon="eye" mode="contained" onPress={() => console.log('Pressed')}>
            View
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    item : {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft : {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
        alignItems: 'center',
    },
    itemText: {
        maxWidth: 200
    },
    button: {
        backgroundColor: '#55BCF6'
    }
})

