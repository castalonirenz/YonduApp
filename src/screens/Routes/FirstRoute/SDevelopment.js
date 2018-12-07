import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { MyTheme } from "../../../themes/globalTheme";
import { MyButton } from "../../../components/button";
import { Company, WhatWeDo } from "../../../Array/stringName";
class SDevelopment extends Component {
  static navigationOptions = ({ navigation }) => ({

    title: Company.itemOne,
    headerTitleStyle: MyTheme.headerWrapper,
    headerLeft: (
        <TouchableOpacity
        onPress={()=>navigation.toggleDrawer()}
        style={{ paddingLeft: 20 }}>
          <Icon
            name="md-menu"
            // color={tintColor}
            size={24}
          />
        </TouchableOpacity>
      ),
      })
  render() {
    return (
      <View style={MyTheme.Container}>
        <ScrollView showsVerticalScrollIndicator={false}
          style={{ width: "90%" }}
          contentContainerStyle={styles.scrollStyle}
        >
         
          {WhatWeDo.map((item, key) => (
            <View style={styles.itemContainer} key={key}>
                {/* HEADER AND ICON */}
                <View style={styles.itemHeaderContainer}>
                <Icon name={item.Icon} size={50} color="black"/>
                <Text style={styles.itemHeaderStyle}>{item.title}</Text>
                </View>
                {/* ITEM */}
                <View style={styles.itemContentContainer}>
                {item.Content.map((item, key) =>
                  <Text style={styles.itemContentStyle} key={key}>{item}</Text>
                  )}
                
                </View>
              </View>
            ))}
          
         
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <MyButton
          onPress={()=>this.props.navigation.navigate('Quota')}
          >Get a Quote</MyButton>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollStyle: {
    flexGrow: 1,
  },
  buttonWrapper:{
    width:"90%"
  },
  itemContainer:{
    justifyContent: 'center',
    paddingLeft: 20,
    paddingBottom: 10,
    marginTop: 30,
    width: "100%",
    borderLeftWidth: 5,
    borderLeftColor: "#A5FCCB",
    elevation: 10,
    backgroundColor:"white"
  },
  itemHeaderContainer:{
    flexDirection:"row",
    alignItems: 'center',
  },
  itemContentContainer:{
    flexDirection:"column"
  },
  itemHeaderStyle:{
    color:"black",
    fontSize: 18,
    marginLeft: 10,
  },
  itemContentStyle:{
    color:"black",
    fontSize: 15
  }
});
export default SDevelopment;
