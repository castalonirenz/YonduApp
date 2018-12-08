import { createStackNavigator, createAppContainer } from "react-navigation";


import {
  SDevelopment,
  Quota,
  Industries
} from "../../screens/Routes/FirstRoute/FirstRouteIndex";
import ThankYouPage from "../../screens/Routes/FirstRoute/ThankYou";
import Insights from "../../screens/Routes/FirstRoute/Insights";

const SDevelopmentStack = createStackNavigator(
  {
    SDevelopment: {
      screen: SDevelopment
    },
    Quota: {
      screen: Quota
    },
    ThankYou:{
      screen: ThankYouPage
    }
  }
);
export const SDevelopmentContainer = createAppContainer(SDevelopmentStack);

const IndustriesStack = createStackNavigator(
  {
    Industries: {
      screen: Industries
    }
  }
);
export const IndustriesStackContainer = createAppContainer(IndustriesStack);


const InsightsStack = createStackNavigator({
    Insights:{
      screen: Insights
    }
})

export const InsightsContainer = createAppContainer(InsightsStack);