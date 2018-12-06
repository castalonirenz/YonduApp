import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from "react-native";

export const MyInput = props =>(
    <View>
        <TextInput
        
        {...props}
        style={[styles.inputStyle, props.style]}
        >

        </TextInput>
    </View>
)
const styles = StyleSheet.create({
    inputStyle:{
        width:"100%",
        backgroundColor:"#FFFFFF"
    }
})