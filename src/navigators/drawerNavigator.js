import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import { SDevelopmentContainer, IndustriesStackContainer} from "./FirstRoute/StackNavigator";
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
        screen: IndustriesStackContainer
    },
    [Company.itemThree]:{
        screen: SDevelopmentContainer
    }
    ,
    [Company.itemFour]:{
        screen: SDevelopmentContainer
    },
    [Company.itemFive]:{
        screen: SDevelopmentContainer
    },
    [Company.itemSix]:{
        screen: SDevelopmentContainer
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