import { createDrawerNavigator, createAppContainer } from "react-navigation";
import { FirstRouteStackContainer } from "./stackNavigator";


const FirstRouteDrawer = createDrawerNavigator({
    "Software Development":{
        screen: FirstRouteStackContainer
    }
},{
    navigationOptions:{
        
    }
})

export const FirstRouteContainer = createAppContainer(FirstRouteDrawer)