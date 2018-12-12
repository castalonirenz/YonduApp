import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { MyTheme } from "../themes/globalTheme";
import { Company } from "../Array/SoftwareArray";
import { home } from "../Array/homeScreenArray";
class HomeScreen extends Component {
  _Navigate = val => {
    this.props.navigation.navigate(val);
    // alert(val)
  };
  render() {
    return (
      <View style={MyTheme.Container}>
        
          {home.map((item, key) => (
            <View key={key} style={MyTheme.displayImageWrapper}>
            <TouchableOpacity 
              onPress={this._Navigate.bind(this, item.name)}
            >
              <ImageBackground
                style={MyTheme.displayImage}
                source={item.image}
              >
                <Text style={MyTheme.displayText}> {item.name} </Text>
              </ImageBackground>
            </TouchableOpacity>
            </View>
          ))}
      </View>
    );
  }
}

export default HomeScreen;
