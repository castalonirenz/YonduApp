/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LOGO from './src/screens/splashScreen';
import HomeScreen from './src/screens/homeScreen';
//import { FirstRouteStackContainer } from "./src/navigators/stackNavigator";
import { FirstRouteContainer } from "./src/navigators/drawerNavigator";

export default class App extends Component{
  render() {
    return <SwitchContainer/>
  }
}

const SwitchNavigator = createSwitchNavigator({
  SplashScreen: LOGO,
  Auth: HomeScreen,
  FirstRoute: FirstRouteContainer



})

const SwitchContainer =createAppContainer(SwitchNavigator)


