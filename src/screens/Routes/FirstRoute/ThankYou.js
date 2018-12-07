import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MyTheme } from "../../../themes/globalTheme";
import { MyButton } from "../../../components/button";
class ThankYouPage extends Component {


  render() {
    return (
      <View style={MyTheme.Container}>

        <View style={styles.imageWrapper}>
        <Image
        style={MyTheme.imageLogo} 
        source={require('../../../../assets/clive-thank-you.png')}/>
        </View>
        <View style={styles.textWrapper}>
        <Text style={styles.headerText}> Thank you for your enquiry </Text>
        <Text style={styles.text}> Your message has been </Text>
        <Text style={styles.text}> sent successfully </Text>
        </View>
        <View style={styles.buttonWrapper}> 
          <MyButton
          onPress={()=> this.props.navigation.navigate('Auth')}
          >Back to Home</MyButton>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText:{
    color:"black",
    fontSize: 20,
  },
  text:{
    color:"gray",
    fontSize: 15
  },
  textWrapper:{
    alignItems:"center",
    flex: 1, 
    marginTop: 50
  },
  imageWrapper:{
    alignItems:"center",
    justifyContent: 'flex-end',
    flex: 1,
  },
  buttonWrapper:{
    width:"90%"
  }
})

export default ThankYouPage;
