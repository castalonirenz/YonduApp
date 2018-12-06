import React, { Component } from "react";
import { View, Text, Picker, StyleSheet,  TouchableOpacity, ScrollView } from "react-native";
import { MyTheme } from "../../../themes/globalTheme";
import { SoftwareDevelopment, solutions } from "../../../Array/stringName";
import { MyInput } from "../../../components/input";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/Ionicons";
import { MyButton } from "../../../components/button";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
class componentName extends Component {
  static navigationOptions = ({ navigation }) => ({

    title: "Get a Quote",
    headerTitleStyle: MyTheme.headerWrapper,
    headerLeft: (
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={{ paddingLeft: 20 }}>
          <Icon
            name="md-arrow-back"
            // color={tintColor}
            size={24}
          />
        </TouchableOpacity>
      ),
      })
  
  state = {
    solutionsSelected:"",
    servicesSelected: "",
    developmentList: SoftwareDevelopment,
    solutionList: solutions
  };

  initialValues = {
    name: "",
    company: "",
    number: "",
    email: "",
    message: ""
  };

  render() {
    let solutions

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={MyTheme.Container}>
    
      <View style={styles.pickerContainer}>
          <Picker
            style={styles.pickerStyle}
            mode="dropdown"
            selectedValue={this.state.selected}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ solutionsSelected: itemValue })
            }
          >
            {this.state.solutionList.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />
            ))}
          </Picker>
        </View>
      
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.pickerStyle}
            mode="dropdown"
            selectedValue={this.state.selected}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ servicesSelected: itemValue })
            }
          >
            {this.state.developmentList.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />
            ))}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Formik
          
            initialValues={this.initialValues}
            onSubmit={this._handleSubmit}
            //*****YUP VALIDATION */
            validationSchema={Yup.object().shape({
              
              name: Yup.string().required("Name is Required"),
              company: Yup.string()
                .required("Password is required"),
              email: Yup.string()
                .email("Email is Invalid")
                .required("Please enter your Email"),
              number: Yup.string()
                .min(11, "Phone number must be 11 digits")
                .matches(phoneRegExp, 'Phone is not valid')
                .required("Please enter your phone number"),
              message: Yup.string()
              .max(250, "Message Limit Reached")
              .required("Please Enter your message")
            })}
            render={({
              values,
              handleSubmit,
              handleChange,
              errors,
              touched,
              resetForm
            }) => (
              <View style={{width:"100%", marginTop: 10}}>
                
                 <View style={styles.inputWrapper}>
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

                 <View style={styles.inputWrapper}>
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

                <View style={styles.inputWrapper}>
                <MyInput
                  onChangeText={handleChange("email")}
                  value={values.email}
                  placeholder="Email"
                  name="Email"
                />
                </View>
                <Text style={styles.textValidation}>
                  {errors.email && touched.email
                    ? errors.email
                    : null}
                </Text>

                  <View style={styles.inputWrapper}>
                <MyInput
                  onChangeText={handleChange("number")}
                  value={values.number}
                  placeholder="Phone Number"
                  name="Number"
                />
                </View>
                <Text style={styles.textValidation}>
                  {errors.number && touched.number
                    ? errors.number
                    : null}
                </Text>

                <View style={styles.inputWrapper}>
                <MyInput
                  style={styles.messageStyle}
                  onChangeText={handleChange("message")}
                  value={values.message}
                  placeholder="Messages"
                  name="message"
                  multiline={true}
                />
                </View>
                <Text style={styles.textValidation}>
                  {errors.message && touched.message
                    ? errors.message
                    : null}
                </Text>
                
               
                <MyButton onPress={()=> alert(this.state.selected)}>Submit</MyButton>
                
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
  pickerStyle:{
    width:"100%",
  },
  pickerContainer: {
    marginTop: 20,
    width: "90%",
    borderBottomWidth: 2,
    borderBottomColor: "#EFF0F4",
  },
  inputContainer: {
    flex: 1,
    width: "90%",
  },
  inputWrapper: {
    borderBottomColor:"#EFF0F4",
    borderBottomWidth: 2,
  },
  textValidation:{
    color:"red"
  },
  messageStyle:{
    height:250,
    textAlign:"center"
  }
});

export default componentName;
