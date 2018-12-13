import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MyTheme } from "../themes/globalTheme";
class LOGO extends Component {
  

  
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Auth')
    },
    1000)
  }
  render() {
    return (
      <View style={MyTheme.Container}>
      <TouchableOpacity 
      style={{width:"100%", height:"100%"}}>
        <Image 
         style={{height:"100%", width:"100%"}}
        resizeMode="stretch"
        source={require('../../assets/loading_page.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LOGO;
