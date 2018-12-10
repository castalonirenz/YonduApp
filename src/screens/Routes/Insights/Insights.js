import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions
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
  state = {
    headerFontSize: 20,
    textContentFontSize: 17,
    miniFontSize: 13,
    imageStyle: {
      height: 90,
      width: 90
    }
  };
  componentDidMount() {
    if (Dimensions.get("window").width <= 360) {
      this.setState(prevState => {
        return {
          headerFontSize: 17,
          textContentFontSize: 14,
          miniFontSize: 11,
          imageStyle: {
            ...prevState.imageStyle,
            height: 80,
            width: 80
          }
        };
      });
    }
 
  }


  _viewData = (body, details, date, img) =>{
  this.props.navigation.navigate('InsightsData',{
    body: body,
    details: details,
    date:date,
    img: img
  })
  } 
  render() {
    
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          {insights.map((items, index) => (
            <TouchableOpacity 
            onPress={this._viewData.bind(this, items.body,items.details,items.date, items.img)}
            key={index} style={styles.subContainer}>
              <View style={styles.itemContainer}>
                <Text
                  numberOfLines={1}
                  style={[
                    MyTheme.headerText,
                    { fontSize: this.state.headerFontSize }
                  ]}
                >
                  {" "}
                  {items.title}{" "}
                </Text>
                <Text
                  numberOfLines={2}
                  style={[
                    MyTheme.textContent,
                    { fontSize: this.state.textContentFontSize }
                  ]}
                >
                  {" "}
                  {items.content}{" "}
                </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Text style={{fontSize:this.state.miniFontSize, color:"#4EC1FE"}}>{items.details + " - "}</Text>
                  <Text style={{fontSize:this.state.miniFontSize, color:"#4EC1FE"}}> {items.date} </Text>
                </View>
              </View>
              <View style={styles.imageHolder}>
                <Image
                  resizeMethod="auto"
                  style={[
                    styles.image,
                    {
                      height: this.state.imageStyle.height,
                      width: this.state.imageStyle.width
                    }
                  ]}
                  source={{ uri: items.img }}
                />
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
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingRight: 20
  },
  itemContainer: {
    width: "80%"
  },
  imageHolder: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    backgroundColor: "#D8D8D8"
  },
  image: {
    height: 90,
    width: 90
  }
});
export default Insights;
