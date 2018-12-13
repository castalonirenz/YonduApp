import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
export const MyButton = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.ButtonStyle, props.ButtonStyle]}>
      <Text style={[styles.textStyle, props.style]}>
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ButtonStyle: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#66CC98",
    backgroundColor: "#66CC98",
    marginBottom: 10,
    marginTop: 5,
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 18,
    color:"#FFF",
    fontWeight: "bold",
    textAlign: "center"
  }
});
