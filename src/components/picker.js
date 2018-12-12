import { View, Picker } from "react-native";
import React, { Component } from 'react';

export const MyPicker = props =>(
    <View style={{width:"100%",alignItems:"flex-start"}}>
    <Picker
    
    {...props}>
    {props.data.map((items, index)=>{
        return(
            <Picker.Item
            key={index}
            label={items.name || items}
            value={items.name || items}/>
        )
    })}
    </Picker>
    </View>
)