import { createStackNavigator, createAppContainer } from "react-navigation";
import { SDevelopment, Quota } from "../../screens/Routes/FirstRoute/FirstRouteIndex";

const subRouteStack = createStackNavigator({
    SDevelopment: {
        screen: SDevelopment
    },
    Quota:{
        screen: Quota
    },
},{
    defaultNavigationOptions:{
        header: null
    }
})


export const subRouteStackContainer = createAppContainer(subRouteStack)