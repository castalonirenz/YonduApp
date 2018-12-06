import { createStackNavigator, createAppContainer } from "react-navigation";
import { Company } from "../../Array/stringName";

import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import {
  SDevelopment,
  MServices,
  ITStaffing,
  CyberSecurity,
  TrainingDevelopment,
  Esolution,
  Quota
} from "../../screens/Routes/FirstRoute/FirstRouteIndex";

const SDevelopmentStack = createStackNavigator(
  {
    SDevelopment: {
      screen: SDevelopment
    },
    Quota: {
      screen: Quota
    }
  }
);
export const SDevelopmentContainer = createAppContainer(SDevelopmentStack);

const MServiceStack = createStackNavigator({
  Home: {
    screen: MServices,
    navigationOptions: ({ navigation }) => ({
      title: Company.itemOne,
      headerTitleStyle: { textAlign: "center", flex: 1 },
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
    })
  }
});
export const MServiceStackContainer = createAppContainer(MServiceStack);

const ITStaffingStack = createStackNavigator({
  Home: {
    screen: ITStaffing,
    navigationOptions: ({ navigation }) => ({
      title: Company.itemOne,
      headerTitleStyle: { textAlign: "center", flex: 1 },
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
    })
  }
});
export const ITStaffingStackContainer = createAppContainer(ITStaffingStack);

const CyberSecurityStack = createStackNavigator({
  Home: {
    screen: CyberSecurity,
    navigationOptions: ({ navigation }) => ({
      title: Company.itemOne,
      headerTitleStyle: { textAlign: "center", flex: 1 },
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
    })
  }
});
export const CyberSecurityStackContainer = createAppContainer(
  CyberSecurityStack
);

const TDevelopmentStack = createStackNavigator({
  Home: {
    screen: TrainingDevelopment,
    navigationOptions: ({ navigation }) => ({
      title: Company.itemOne,
      headerTitleStyle: { textAlign: "center", flex: 1 },
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
    })
  }
});
export const TDevelopmentStackContainer = createAppContainer(TDevelopmentStack);

const ESolutionStack = createStackNavigator({
  Home: {
    screen: Esolution,
    navigationOptions: ({ navigation }) => ({
      title: Company.itemOne,
      headerTitleStyle: { textAlign: "center", flex: 1 },
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
    })
  }
});
export const ESolutionStackContainer = createAppContainer(ESolutionStack);


