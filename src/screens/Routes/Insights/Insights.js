import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import React, { Component } from "react";
import { Company } from "../../../Array/stringName"
import Icon from "react-native-vector-icons/Ionicons";
import { MyTheme } from '../../../themes/globalTheme';
class Insights extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: Company.itemThree,
    headerTitleStyle: MyTheme.headerWrapper,
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{ paddingLeft: 20 }}
      >
        <Icon
          name="md-menu"
          // color={tintColor}
          size={24}
        />
      </TouchableOpacity>
    )
  });
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={MyTheme.Container}>
        <View style={styles.subContainer}>
        <View style={styles.itemContainer}>
        <Text> Insights </Text>
        <Text> Insights </Text>
        <Text> Insights </Text>
        </View>
        <View style={styles.imageHolder}>

        </View>
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer:{
    alignItems: 'center',
    width:"90%",
    backgroundColor:"orange",
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  itemContainer:{
    backgroundColor:"pink"
  },
  imageHolder:{
    height: 80,
    width: 80,
    backgroundColor:"blue"

  }

})
export default Insights;
