import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import { SDevelopmentContainer, MServiceStackContainer, ITStaffingStackContainer, 
CyberSecurityStackContainer, TDevelopmentStackContainer, ESolutionStackContainer} from "./FirstRoute/FirstRouteStack";
import React, { Component } from "react";
import { Company } from "../Array/stringName";
import {
  View,
  SafeAreaView,
  ScrollView,

} from "react-native";

const CustomDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1 }}>
    
      <ScrollView>
        <DrawerItems {...props} 
        />
      </ScrollView>
    </SafeAreaView>
  );

const FirstRouteDrawer = createDrawerNavigator({
    [Company.itemOne]:{    
        screen: SDevelopmentContainer
    },
    [Company.itemTwo]:{
        screen: MServiceStackContainer
    },
    [Company.itemThree]:{
        screen: ITStaffingStackContainer
    }
    ,
    [Company.itemFour]:{
        screen: CyberSecurityStackContainer
    },
    [Company.itemFive]:{
        screen: TDevelopmentStackContainer
    },
    [Company.itemSix]:{
        screen: ESolutionStackContainer
    }
},{
    contentComponent: CustomDrawerComponent,
    contentOptions:{
        activeTintColor:"#298F78",
        labelStyle:{
            fontSize: 18
        }       
    },
    
})

export const FirstRouteContainer = createAppContainer(FirstRouteDrawer)