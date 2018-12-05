import { createStackNavigator, createAppContainer } from "react-navigation";
import SDevelopment from "../Routes/FirstRoute/SDevelopment"

const FirstRouteStack = createStackNavigator({
    Home: SDevelopment
})
export const FirstRouteStackContainer = createAppContainer(FirstRouteStack)