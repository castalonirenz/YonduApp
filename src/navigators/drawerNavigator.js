import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import { SDevelopmentContainer, MServiceStackContainer, ITStaffingStackContainer, CyberSecurityStackContainer} from "./FirstRouteStack";
import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,

} from "react-native";

const CustomDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{height: 150, backgroundColor: 'orange', alignItems:'center', justifyContent: 'center'}}>
    </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );

const FirstRouteDrawer = createDrawerNavigator({
    "Software Development":{    
        screen: SDevelopmentContainer
    },
    "Managed Services":{
        screen: MServiceStackContainer
    },
    "IT Staffing":{
        screen: ITStaffingStackContainer
    }
    ,
    "Cyber Security":{
        screen: CyberSecurityStackContainer
    }
},{
    contentComponent: CustomDrawerComponent,
    contentOptions:{
        activeTintColor:"#298F78",       
    },
    
})

export const FirstRouteContainer = createAppContainer(FirstRouteDrawer)