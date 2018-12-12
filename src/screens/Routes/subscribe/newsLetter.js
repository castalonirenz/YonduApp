import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Company } from "../../../Array/SoftwareArray";
import Icon from "react-native-vector-icons/Ionicons";
import { MyTheme } from "../../../themes/globalTheme";
import { MyInput } from "../../../components/input";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { MyButton } from "../../../components/button";

const axios = require("axios");
class NewsLetter extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Subscribe with Email",
    headerTitleStyle: MyTheme.headerWrapper,
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.navigate("Auth")}
        style={{ paddingLeft: 20 }}
      >
        <Icon
          name="ios-arrow-back"
          // color={tintColor}
          size={24}
        />
      </TouchableOpacity>
    )
  });

  _handleSubmit = (values) => {
    alert('weh')

    axios.post('http://192.168.190.20:3000/newsletter', {
      email: values.email
      })
      .then(response => {
        console.log(response ,"RESPONSE");
        alert('Success')
        this.props.navigation.navigate("Auth");
      })
      .catch(error => {
        console.log(error, "MAGIC ERROR");
      });
  };

  render() {
    return (
      <View style={MyTheme.Container}>
        
          <Formik
            initialValues={{ email: "" }}
            onSubmit={this._handleSubmit}
            //*****YUP VALIDATION */
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Email is Invalid")
                .required("Please enter your Email")
            })}
            render={({
              values,
              handleSubmit,
              handleChange,
              errors,
              touched,
              resetForm
            }) => (
              <View style={{flex: 1,width: "90%", marginTop: 10 }}>
                <View style={styles.itemWrapper}>
                  <Text style={MyTheme.headerText}> News Letter </Text>
                  <Text style={{ width: "50%", textAlign: "center" }}>
                    {" "}
                    Get the latest tech news, careers and more!{" "}
                  </Text>
                </View>
                <View style={[MyTheme.inputWrapper]}>
                  <MyInput
                    onChangeText={handleChange("email")}
                    value={values.name}
                    placeholder="Email"
                    name="Email"
                  />
                </View>
                
                <Text style={styles.textValidation}>
                  {errors.email && touched.email ? errors.email : null}
                </Text>
                
                <View style={{flex: 1, justifyContent:"flex-end"}}>
                <MyButton onPress={handleSubmit}>Submit</MyButton>
               
                </View>
              </View>
            )}
          />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    justifyContent:"flex-end",
    width: "100%",
    alignItems: "center",
 
  },
  textValidation: {
    color: "red"
  }
});

export default NewsLetter;
