import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Linking } from "react-native";
import MapView from "react-native-maps";
import { MyTheme } from "../../../themes/globalTheme";
import  Icon from "react-native-vector-icons/Ionicons";
import Icons from 'react-native-vector-icons/FontAwesome5'

class ContactUs extends Component {
  static navigationOptions={
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    YonduLocation: {
      latitude: 14.555717,
      longitude: 121.0476,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0522
    }
  };

  openMail= () =>{
    Linking.canOpenURL("mailto:business@yondu.com?subject=Inquire")
    .then(Linking.openURL('mailto:business@yondu.com?subject=Inquire'))
  }
   
  openDialer = () =>{
    Linking.openURL('tel: +917-444-2222')
  }
  render() {
    let textFontSize
    let iconSize
    if(Dimensions.get('window').width <= 360){
      textFontSize = 14
      iconSize=20
    }
    else{
      textFontSize = 17
      iconSize=30
    }
  
    return (
      <View style={MyTheme.Container}>
        <View style={styles.topView}>
       
          <MapView
            style={{ height: "100%", width: "100%" }}
            initialRegion={{
              latitude: 14.555852,
              longitude: 121.050049,
              latitudeDelta: 0.002,
              longitudeDelta: 0.002
            }}
            
          >
        
            <MapView.Marker
              coordinate={{
                latitude: 14.555852,
                longitude: 121.050049,
                
              }}
            />
          </MapView>
          <TouchableOpacity 
          style={{position:"absolute",  top: 20, left: 20}}
          onPress={()=> this.props.navigation.toggleDrawer()}>
          <Icon name="md-menu" size={30}/>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
        <View style={styles.detailWrapper}>
        <Icons name="location-arrow" size={iconSize} color="#0e0f0f"/>
        <Text style={[MyTheme.textContent, {marginLeft:10,  color:"#000", fontSize:textFontSize}]}>Lower Penthouse, Panorama Building,{"\n"} 34th St. cor Lane A, Bonifacio Global {"\n"}City, Taguig, Philippines 1634</Text>
        </View>
              
        <TouchableOpacity onPress={this.openDialer}>
         <View style={styles.detailWrapper}>
        <Icons name="mobile-alt" size={iconSize} color="#0e0f0f"/>
        <Text style={[MyTheme.textContent, {marginLeft:15,  color:"#000", fontSize:textFontSize , textDecorationLine:"underline"}]}>+917-444-2222</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.openMail}>
        <View style={styles.detailWrapper}>
        <Icons name="envelope" size={iconSize} color="#0e0f0f"/>
        <Text style={[MyTheme.textContent, {marginLeft:10, color:"#000", fontSize:textFontSize, textDecorationLine:"underline"}]}>business@yondu.com</Text>
        </View>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topView:{
    flex: 1, 
    width: "100%", 
    borderBottomWidth: 1, 
    borderBottomColor:"#0e0f0f"
  },
  bottomView:{
    flex: 1, 
    width:"100%",
    paddingLeft: "10%",
  },
  detailWrapper:{
    flexDirection:'row',
    marginTop: 50,
  },
  textContent:{
    
  }
})

export default ContactUs;
