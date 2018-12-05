import { createStackNavigator, createAppContainer } from "react-navigation";
import { Company_Yondu } from "../stringName/stringName";
import SDevelopment from "../Routes/FirstRoute/SDevelopment"
import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import MServices from "../Routes/FirstRoute/MServices";
import ITStaffing from '../Routes/FirstRoute/ITStaffing'
import CyberSecurity from '../Routes/FirstRoute/CSecurity'
const SDevelopmentStack = createStackNavigator({
    Home: {
        screen:SDevelopment,
        navigationOptions: ({ navigation }) => ({
            
            title: Company_Yondu.itemOne,
            headerTitleStyle: { textAlign: 'center', flex: 1},
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
    }

})
export const SDevelopmentContainer = createAppContainer(SDevelopmentStack)

const MServiceStack = createStackNavigator({
    Home: {
        screen:MServices,
        navigationOptions: ({ navigation }) => ({
            
            title: Company_Yondu.itemOne,
            headerTitleStyle: { textAlign: 'center', flex: 1},
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
    }

})
export const MServiceStackContainer = createAppContainer(MServiceStack)

const ITStaffingStack = createStackNavigator({
    Home: {
        screen:ITStaffing,
        navigationOptions: ({ navigation }) => ({
            
            title: Company_Yondu.itemOne,
            headerTitleStyle: { textAlign: 'center', flex: 1},
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
    }

})
export const ITStaffingStackContainer = createAppContainer(ITStaffingStack)

const CyberSecurityStack = createStackNavigator({
    Home: {
        screen:CyberSecurity,
        navigationOptions: ({ navigation }) => ({
            
            title: Company_Yondu.itemOne,
            headerTitleStyle: { textAlign: 'center', flex: 1},
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
    }

})
export const CyberSecurityStackContainer = createAppContainer(CyberSecurityStack)