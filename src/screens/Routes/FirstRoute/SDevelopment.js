import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { MyTheme } from "../../../themes/globalTheme";
import { MyButton } from "../../../components/button";
import { Company } from "../../../Array/stringName";
class SDevelopment extends Component {
  static navigationOptions = ({ navigation }) => ({

    title: Company.itemOne,
    headerTitleStyle: MyTheme.headerWrapper,
    headerLeft: (
        <TouchableOpacity
        onPress={()=>navigation.toggleDrawer()}
        style={{ paddingLeft: 20 }}>
          <Icon
            name="md-menu"
            // color={tintColor}
            size={24}
          />
        </TouchableOpacity>
      ),
      })
  render() {
    return (
      <View style={MyTheme.Container}>
        <ScrollView
          style={{ width: "90%" }}
          contentContainerStyle={styles.scrollStyle}
        >
          <View style={styles.subContainer}>
            <Text> Web App </Text>
            <Text> Mobile App </Text>
            <Text> Enterprise Solution </Text>
            <Text> System Integration </Text>
          </View>
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <MyButton
          onPress={()=>this.props.navigation.navigate('Quota')}
          >Get a Quote</MyButton>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%"
  },
  scrollStyle: {
    flexGrow: 1,
    backgroundColor: "green"
  },
  buttonWrapper:{
    width:"90%"
  }
});
export default SDevelopment;
