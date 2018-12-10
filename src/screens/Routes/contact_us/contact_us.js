import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { MyTheme } from "../../../themes/globalTheme";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={MyTheme.Container}>
      <View style={{flex: 1, width:"100%"}}>
        <MapView
        style={{height: "100%", width:"100%"}}
          initialRegion={{
            latitude: 14.555717,
            longitude: 121.050115,
            latitudeDelta: 0.008922,
            longitudeDelta: 0.000421
          }}
        />
        </View>
        <View style={{flex: 2}}>

        </View>
      </View>
    );
  }
}

export default ContactUs;
