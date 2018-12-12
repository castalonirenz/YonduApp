import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  Share
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { MyTheme } from "../../../themes/globalTheme";
import { Company } from "../../../Array/SoftwareArray";
class InsightsData extends Component {

  static navigationOptions = {
    header: null
  };
  
  _onShare(body, details, date, img) {
    Share.share({
      message: body + " " + details +" " + "date:" + date +" Image" + img,
      url: 'http://bam.tech',
      title: 'Wow, did you see that?'
    }, {
      // Android only:
      dialogTitle: 'Share Development Experience',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })

  
  }

  render() {
    const { navigation } = this.props;
    const body = navigation.getParam("body", "NO-ID");
    const details = navigation.getParam("details", "NO-details");
    const date = navigation.getParam("date", "NO-date");
    const img = navigation.getParam("img", "NO-img");
    
    let fontBody = 17
    let headerText = 20
    let iconSize = 40
    if(Dimensions.get('window').width <= 360){
      fontBody = 14
     headerText = 16
       iconSize = 30
  }
    return (
       
      <View style={MyTheme.Container}>
     
        <View style={styles.topView}>
          <ImageBackground style={styles.imageBackground} source={{ uri: img }}>
            <View style={styles.topHeader}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon name="ios-arrow-back" size={iconSize} color="#FFF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onShare.bind(this, body,details,date,img)}>
                <Icon name="ios-share" size={iconSize} color="#FFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomHeader}>
              <Text style={[MyTheme.headerText, { color: "#fff", paddingLeft: 20, fontSize: headerText }]}>
                LoopBack is a highly-extensible, open-source Node.js framework
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.dateWrapper}>
            <Text>{details}</Text>
            <Text>{date}</Text>
          </View>
          <ScrollView>
          <View style={styles.bodyWrapper}>
            <Text style={[MyTheme.textContent, { color: "#131414", fontSize:fontBody }]}>
              {body}
            </Text>
          </View>
          </ScrollView>
        </View>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-between"
  },
  topHeader: {
    flexDirection: "row",
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between"
  },
  bottomHeader: {
    height: "20%",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  topView: {
    flex: 1,
    width: "100%"
  },
  bottomView: {
    flex: 1.5
  },
  dateWrapper: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20
  },
  bodyWrapper:{
    
    padding: 20,
  }
});

export default InsightsData;
