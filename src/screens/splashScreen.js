import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MyTheme } from "../themes/globalTheme";
class LOGO extends Component {
  

  render() {
    return (
      <View style={MyTheme.Container}>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Auth')}>
        <Image 
        style={MyTheme.imageLogo}
        resizeMode="contain"
        source={require('../../assets/yonduLogo.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LOGO;
