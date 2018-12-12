import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import { MyTheme } from "../themes/globalTheme";
import {
  SDevelopmentContainer,
  IndustriesStackContainer,
  InsightsContainer,
  ContactUsContainer,
  AboutStackContainer
} from "./FirstRoute/StackNavigator";
import React, { Component } from "react";
import { Company } from "../Array/SoftwareArray";
import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground
      source={require("../../assets/drawerImage.jpg")}
      resizeMode="stretch"
      style={{
        height: 150,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        resizeMode="contain"
        style={{ height: "50%", width: "50%" }}
        source={require("../../assets/yonduSmall.png")}
      />
    </ImageBackground>
    <ScrollView>
      <DrawerItems 
      {...props} />
    </ScrollView>
    <View style={{paddingLeft: 15, height: "5%" }}>
    <TouchableOpacity onPress={()=> props.navigation.navigate('Subscribe')}>
      <Text style={[MyTheme.textContent, { fontSize: 15}]}>Subscribe with Email</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const FirstRouteDrawer = createDrawerNavigator(
  {
    [Company.itemOne]: {
      screen: SDevelopmentContainer
    },
    [Company.itemTwo]: {
      screen: IndustriesStackContainer
    },
    [Company.itemThree]: {
      screen: InsightsContainer
    },
    [Company.itemFour]: {
      screen: SDevelopmentContainer
    },
    [Company.itemFive]: {
      screen: AboutStackContainer
    },
    [Company.itemSix]: {
      screen: ContactUsContainer
    }
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: "#298F78",
      inactiveTintColor:"#969797",
      labelStyle: {
        fontSize: 15,
        fontWeight:"normal"
      }
    }
  }
);

export const FirstRouteContainer = createAppContainer(FirstRouteDrawer);
