import React, { Component } from "react";
import {
  View,
  Text,
  Picker,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { MyPicker } from "../../../components/picker";
import { MyTheme } from "../../../themes/globalTheme";
import { MyInput } from "../../../components/input";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/Ionicons";
import { MyButton } from "../../../components/button";
import { solutions, services } from "../../../Array/SoftwareArray";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const axios = require("axios");
class componentName extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Get a Quote",
    headerTitleStyle: MyTheme.headerWrapper,
    
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 20 }}
      >
        <Icon
          name="md-arrow-back"
           color={"#FFF"}
          size={24}
        />
      </TouchableOpacity>
    )
  });
  initialValues = {
    name: "",
    company: "",
    number: "",
    email: "",
    message: "",
    solution: "",
    services:""
  };

  _handleSubmit = (values) => {
   
    axios.post('http://192.168.190.20:3000/qoute_list', {
    ...values
    })
    .then(response => {
      console.log(response ,"RESPONSE");
      alert('Quote Success')
      this.props.navigation.navigate("ThankYou");
    })
    .catch(error => {
      console.log(error, "MAGIC ERROR");
    });

  };
  render() {
    console.log(services["Software Development"])
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={MyTheme.Container}>
     

          <View style={styles.inputContainer}>
            <Formik
              initialValues={this.initialValues}
              onSubmit={this._handleSubmit}
              //*****YUP VALIDATION */
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is Required"),
                company: Yup.string().required("Company is required"),
                email: Yup.string()
                  .email("Email is Invalid")
                  .required("Please enter your Email"),
                number: Yup.string()
                  .min(11, "Phone number must be 11 digits")
                  .matches(phoneRegExp, "Phone is not valid")
                  .required("Please enter your phone number"),
                message: Yup.string()
                  .max(250, "Message Limit Reached")
                  .required("Please Enter your message"),
                solution: Yup.string()
                .required('Required'),
                services: Yup.string()
                .required('Required')
              })}
              render={({
                values,
                handleSubmit,
                handleChange,
                errors,
                touched,
                resetForm
              }) => (
                <View style={{ width: "100%", marginTop: 10 }}>
                  <View style={styles.pickerContainer}>
                    <MyPicker
                      style={styles.pickerStyle}
                      mode="dropdown"
                      data={solutions}
                      selectedValue={values.solution}
                      onValueChange={handleChange("solution")}
                    />
                  </View>
                  <Text style={styles.textValidation}>
                    {errors.solution && touched.solution ? errors.solution : null}
                  </Text>
                    <View style={styles.pickerContainer}>
                    <MyPicker
                      style={styles.pickerStyle}
                      mode="dropdown"
                      data={services[values.solution === "" ? "What solution do you need?" : values.solution]}
                      selectedValue={values.services}
                      onValueChange={handleChange("services")}
                    />
                  </View>
                  <Text style={styles.textValidation}>
                    {errors.services && touched.services ? errors.services : null}
                  </Text>
                  <View style={MyTheme.inputWrapper}>
                    <MyInput
                      onChangeText={handleChange("name")}
                      value={values.name}
                      placeholder="Name"
                      name="Name"
                    />
                  </View>

                  <Text style={styles.textValidation}>
                    {errors.name && touched.name ? errors.name : null}
                  </Text>

                  <View style={MyTheme.inputWrapper}>
                    <MyInput
                      onChangeText={handleChange("company")}
                      value={values.company}
                      placeholder="Company"
                      name="Company"
                    />
                  </View>
                  <Text style={styles.textValidation}>
                    {errors.company && touched.company ? errors.company : null}
                  </Text>

                  <View style={MyTheme.inputWrapper}>
                    <MyInput
                      onChangeText={handleChange("email")}
                      value={values.email}
                      placeholder="Email"
                      name="Email"
                    />
                  </View>
                  <Text style={styles.textValidation}>
                    {errors.email && touched.email ? errors.email : null}
                  </Text>

                  <View style={MyTheme.inputWrapper}>
                    <MyInput
                      onChangeText={handleChange("number")}
                      value={values.number}
                      placeholder="Phone Number"
                      name="Number"
                    />
                  </View>
                  <Text style={styles.textValidation}>
                    {errors.number && touched.number ? errors.number : null}
                  </Text>

                  <View style={styles.messageInputWrapper}>
                    <MyInput
                      onChangeText={handleChange("message")}
                      value={values.message}
                      placeholder="Messages"
                      name="message"
                      multiline={true}
                    />
                  </View>
                  <Text style={styles.textValidation}>
                    {errors.message && touched.message ? errors.message : null}
                  </Text>

                  <MyButton onPress={handleSubmit}>Submit</MyButton>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pickerStyle: {
    width: "100%"
  },
  pickerContainer: {
    marginTop: 20,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#EFF0F4"
  },
  inputContainer: {
    flex: 1,
    width: "90%"
  },

  messageInputWrapper: {
    // height: 250,
    flex: 1,
    
    borderBottomColor: "#EFF0F4",
    borderBottomWidth: 2
  },
  textValidation: {
    color: "red"
  }
});

export default componentName;
