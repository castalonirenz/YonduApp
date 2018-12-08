import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import React, { Component } from "react";
import { Company } from "../../../Array/stringName";
import Icon from "react-native-vector-icons/Ionicons";
import { MyTheme } from "../../../themes/globalTheme";
import { insights } from "../../../Array/insightsArray";
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
    this.state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={{flex: 1, alignItems:"center"}}>
        {insights.map((items, index) => (
          <TouchableOpacity key={index} style={styles.subContainer}>
            <View style={styles.itemContainer}>
              <Text 
              numberOfLines={1}
              style={MyTheme.headerText}> {items.title} </Text>
              <Text 
              numberOfLines={2}
              style={MyTheme.textContent}> {items.content} </Text>
              <View style={{flexDirection:"row"}}>
                <Text>{items.details}</Text>
                <Text> {items.date} </Text>
              </View>
            </View>
            <View style={styles.imageHolder}>
            <Text>Image</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    alignItems: "center",
    width: "90%",
    justifyContent: 'space-between',
    flexDirection: "row",
    marginTop: 20,
    borderBottomColor: "#D8D8D8" ,
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingRight: 20,
    
  },
  itemContainer: {
    width: "80%",
  
    
  },
  imageHolder: {
    height: "90%",
    width: 80,
    backgroundColor: "#D8D8D8",
    
  }
});
export default Insights;

    