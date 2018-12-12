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
import NewsLetter from "../../screens/Routes/subscribe/newsLetter"
import About from "../../screens/Routes/about/about";
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
   
  },{
    defaultNavigationOptions:{
      headerTintColor:"#FFF",
      headerStyle:{
        backgroundColor:"#67CC9C"
      }
    }
  }
);
export const SDevelopmentContainer = createAppContainer(SDevelopmentStack);

const IndustriesStack = createStackNavigator(
  {
    Industries: {
      screen: Industries
    }
  },{
    defaultNavigationOptions:{
      headerTintColor:"#FFF",
      headerStyle:{
        backgroundColor:"#67CC9C"
      }
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
},{
  defaultNavigationOptions:{
    headerTintColor:"#FFF",
    headerStyle:{
      backgroundColor:"#67CC9C"
    }
  }
})

export const InsightsContainer = createAppContainer(InsightsStack);

const contactUsStack = createStackNavigator({
  Contact:{
    screen: ContactUs
  }
},{
  defaultNavigationOptions:{
    headerTintColor:"#FFF",
    headerStyle:{
      backgroundColor:"#67CC9C"
    }
  }
})

export const ContactUsContainer = createAppContainer(contactUsStack)

const NewsLetterStack = createStackNavigator({
  NewsLetter:{
    screen: NewsLetter
  }
},{
  defaultNavigationOptions:{
    headerTintColor:"#FFF",
    headerStyle:{
      backgroundColor:"#67CC9C"
    }
  }
})

export const NewsLetterStackContainer = createAppContainer(NewsLetterStack)

const AboutStack = createStackNavigator({
  About:{
    screen: About
  }
},{
  defaultNavigationOptions:{
    headerTintColor:"#FFF",
    headerStyle:{
      backgroundColor:"#67CC9C"
    }
  }
})

export const AboutStackContainer = createAppContainer(AboutStack)