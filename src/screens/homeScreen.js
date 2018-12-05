import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MyTheme } from "../themes/globalTheme";
import { Company_Yondu } from "../stringName/stringName";
class HomeScreen extends Component {
    _Navigate =(val) =>{
    this.props.navigation.navigate(val)
  // alert(val)
    }
  render() {
    return (
      <View style={MyTheme.Container}>
        <TouchableOpacity onPress={this._Navigate.bind(this, 'FirstRoute')}>
          <Text style={MyTheme.displayText}> {Company_Yondu.itemOne} </Text>
        </TouchableOpacity>
        <Text style={MyTheme.displayText}> {Company_Yondu.itemTwo} </Text>
        <Text style={MyTheme.displayText}> {Company_Yondu.itemThree} </Text>
        <Text style={MyTheme.displayText}> {Company_Yondu.itemFour} </Text>
        <Text style={MyTheme.displayText}> {Company_Yondu.itemFive} </Text>
        <Text style={MyTheme.displayText}> {Company_Yondu.itemSix} </Text>
      </View>
    );
  }
}

export default HomeScreen;
