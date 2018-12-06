import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React, { Component } from 'react';
export const MyButton = props => (
    <View>
        <TouchableOpacity 
        {...props}
        style={[styles.ButtonStyle]}>
            <Text
            {...props}
            style={[styles.textStyle]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    ButtonStyle:{
        width: "100%",
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#298F78",
        backgroundColor:"#298F78",
        marginBottom: 10,
        marginTop: 5,
        justifyContent: 'center',
    },
    textStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
       
    }

})