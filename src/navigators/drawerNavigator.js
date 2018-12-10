import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import { SDevelopmentContainer, IndustriesStackContainer, InsightsContainer, ContactUsContainer} from "./FirstRoute/StackNavigator";
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
        screen: InsightsContainer
    }
    ,
    [Company.itemFour]:{
        screen: SDevelopmentContainer
    },
    [Company.itemFive]:{
        screen: SDevelopmentContainer
    },
    [Company.itemSix]:{
        screen: ContactUsContainer
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