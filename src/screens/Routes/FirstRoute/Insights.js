import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MyTheme } from '../../../themes/globalTheme';
class Insights extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={MyTheme.Container}>
        <Text> Insights </Text>
      </View>
    );
  }
}

export default Insights;
