import { createStackNavigator, createAppContainer } from "react-navigation";


import {
  SDevelopment,
  Quota,
  Industries
} from "../../screens/Routes/FirstRouteIndex";
import ThankYouPage from "../../screens/Routes/SoftwareDevelopment/ThankYou";
import Insights from "../../screens/Routes/Insights/Insights";
import InsightsData from "../../screens/Routes/Insights/InsightsData";
import ContactUs from "../../screens/Routes/contact_us/contact_us";

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
    },
    InsightsData:{
      screen: InsightsData
    }
})

export const InsightsContainer = createAppContainer(InsightsStack);

const contactUsStack = createStackNavigator({
  Contact:{
    screen: ContactUs
  }
})

export const ContactUsContainer = createAppContainer(contactUsStack)

