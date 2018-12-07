import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { MyTheme } from "../../../themes/globalTheme";
import { Company } from "../../../Array/stringName";
import Icon from "react-native-vector-icons/Ionicons";
class Industries extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: Company.itemTwo,
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
      <View style={MyTheme.Container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.textHeader}>
          <Text style={MyTheme.headerText}>Lorem ipsum dolor sit amet</Text>
          <View style={styles.textContentWrapper}>
            <Text style={MyTheme.textContent}>Quisque a est vel tortor</Text>
            <Text style={MyTheme.textContent}>lobortis scelerisque</Text>
            <Text style={MyTheme.textContent}>vitae id risus.</Text>
          </View>
        </View>
        <View />
        <View style={{alignItems:"center", flex: 3}}>
        <View style={styles.detailsWrapper}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSize}
              source={require("../../../../assets/industries/ict.png")}
            />
            <Text style={MyTheme.headerText}>ICT</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSize}
              source={require("../../../../assets/industries/bpo.png")}
            />
            <Text style={MyTheme.headerText}>BPO</Text>
          </View>
        </View>

        <View style={styles.detailsWrapper}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSize}
              source={require("../../../../assets/industries/banking_and_finance.png")}
            />
            <Text
            style={MyTheme.headerText}>Banking and Finance</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSize}
              source={require("../../../../assets/industries/real_estate.png")}
            />
            <Text style={MyTheme.headerText}>Real Estate</Text>
          </View>
        </View>

        <View style={styles.detailsWrapper}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSize}
              source={require("../../../../assets/industries/government.png")}
            />
            <Text style={MyTheme.headerText}>Government</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSize}
              source={require("../../../../assets/industries/manufacturing.png")}
            />
            <Text style={MyTheme.headerText}>Manufacturing</Text>
          </View>
        </View>

        <View style={styles.detailsWrapper}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSize}
              source={require("../../../../assets/industries/construction.png")}
            />
            <Text style={MyTheme.headerText}>Construction</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSize}
              source={require("../../../../assets/industries/retail.png")}
            />
            <Text style={MyTheme.headerText}>Retail</Text>
          </View>
        </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    marginTop: 20,
    flex: 1,
    alignItems: "center"
  },
  headerText: {
    color: "black",
    fontSize: 20
  },
  textContentWrapper: {
    marginTop: 20,
    alignItems: "center"
  },
  detailsWrapper: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    
    justifyContent:"space-around",
    marginTop: 5,
   
  },
  imageSize: {
    height: 70,
    width: 70
  },
  imageContainer: {
    
     width: "50%",
    backgroundColor:"orange",
    alignItems: "center",
    justifyContent:"center"
  }
});
export default Industries;
