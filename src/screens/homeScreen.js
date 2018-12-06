import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { MyTheme } from "../themes/globalTheme";
import { Company } from "../Array/stringName";
class HomeScreen extends Component {
  _Navigate = val => {
    this.props.navigation.navigate(val);
    // alert(val)
  };
  render() {
    return (
      <View style={MyTheme.Container}>
        <View style={MyTheme.displayImageWrapper}>
          <TouchableOpacity onPress={this._Navigate.bind(this, "FirstRoute")}>
            <ImageBackground
           
              style={MyTheme.displayImage}
              source={require("../../assets/what_we_do.png")}
            >
              <Text style={MyTheme.displayText}> {Company.itemOne} </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={MyTheme.displayImageWrapper}>
          <TouchableOpacity onPress={this._Navigate.bind(this, "FirstRoute")}>
            <ImageBackground
              style={MyTheme.displayImage}
              source={require("../../assets/industries.jpg")}
            >
              <Text style={MyTheme.displayText}> {Company.itemTwo} </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={MyTheme.displayImageWrapper}>
          <TouchableOpacity onPress={this._Navigate.bind(this, "FirstRoute")}>
            <ImageBackground
              style={MyTheme.displayImage}
              source={require("../../assets/insights.png")}
            >
              <Text style={MyTheme.displayText}> {Company.itemThree} </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={MyTheme.displayImageWrapper}>
          <TouchableOpacity onPress={this._Navigate.bind(this, "FirstRoute")}>
            <ImageBackground
              style={MyTheme.displayImage}
              source={require("../../assets/careers.jpg")}
            >
              <Text style={MyTheme.displayText}> {Company.itemFour} </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={MyTheme.displayImageWrapper}>
          <TouchableOpacity onPress={this._Navigate.bind(this, "FirstRoute")}>
            <ImageBackground
              style={MyTheme.displayImage}
              source={require("../../assets/about_yondu.jpg")}
            >
              <Text style={MyTheme.displayText}> {Company.itemFive} </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={MyTheme.displayImageWrapper}>
          <TouchableOpacity onPress={this._Navigate.bind(this, "FirstRoute")}>
            <ImageBackground
              style={MyTheme.displayImage}
              source={require("../../assets/contact_us.jpg")}
            >
              <Text style={MyTheme.displayText}> {Company.itemSix} </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
