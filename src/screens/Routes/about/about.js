import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { MyTheme } from "../../../themes/globalTheme";
import { Company } from "../../../Array/SoftwareArray";
import Icon from "react-native-vector-icons/Ionicons";
class About extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: Company.itemFive,
    headerTitleStyle: MyTheme.headerWrapper,
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.navigate("Auth")}
        style={{ paddingLeft: 20 }}
      >
        <Icon
          name="ios-arrow-back"
          color={"#FFF"}
          size={24}
        />
      </TouchableOpacity>
    )
  });

  render() {
    let headerFontSize;
    let contentFontSize;

    if (Dimensions.get("window").width <= 360) {
      headerFontSize = 15;
      contentFontSize = 14;
    } else {
      contentFontSize = 17;
      headerFontSize = 20;
    }
    return (
      <View style={MyTheme.Container}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={styles.subContainer}>
        <View style={styles.headerWrapper}>
          <Text style={[MyTheme.headerText, { textAlign: "center", fontSize: headerFontSize }]}>
            We create. We innovate. We are the Philippines’ leading IT solutions
            that specializes in turning big ideas into happier technological
            experiences.
          </Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={[MyTheme.textContent, { textAlign: "center", fontSize: contentFontSize }]}>
            Founded in 2001, Yondu has since established itself as a topnotch IT
            solutions provider in the Philippines- connecting the archipelago
            through creative digital innovation.
          </Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={[MyTheme.textContent, {fontSize: contentFontSize }]}>
            Our experienced IT professionals confidently guide companies through
            today’s complex technological landscape.We don’t just put our
            clients on the map. Using the power of technology, we help them stay
            there, too.
          </Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={[MyTheme.textContent, {fontSize: contentFontSize}]}>
            Backed by top tech company Xurpas and telco giant, Globe Telecom,
            Inc., Yondu has all the tools to transform your big ideas into
            reality with the most efficient strategies. May it be web, mobile,
            software development or systems integration, we got you all covered.
          </Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={[MyTheme.textContent, {fontSize: contentFontSize }]}>
            Yondu’s extensive portfolio shows our seamless collaboration with
            business partners from the fields of technology, retail, and real
            estate. It also shows how we care for our partners, and our hunger
            to deliver service that is cut above the rest.
          </Text>
        </View>
        <View style={{width:"90%", alignItems:"center"}}>
          <Image 
          resizeMode="contain"
          style={{width:"100%"}}
          source={require('../../../../assets/logo-xurpas-globe.png')}
          />
        </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    flex: 1,
 
    justifyContent: 'center',
    marginTop: 30,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 20,
    width: "80%",
    
  },
  subContainer:{
    width:"100%",
    alignItems: 'center',
  },
  imageHolder:{
    width:"90%",
   alignItems:"center",
   marginTop: 20,
  }
});

export default About;
