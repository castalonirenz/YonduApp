import React, { Component } from "react";
import { View, Text, Picker, StyleSheet,  TouchableOpacity } from "react-native";
import { MyTheme } from "../../../themes/globalTheme";
import { SoftwareDevelopment } from "../../../Array/stringName";
import { MyInput } from "../../../components/input";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/Ionicons";
import { MyButton } from "../../../components/button";
class componentName extends Component {

  state = {
    selected: "",
    developmentList: SoftwareDevelopment
  };

  initialValues = {
    name: "",
    company: "",
    number: "",
    email: "",
    message: ""
  };

  render() {
    return (
      <View style={MyTheme.Container}>
      
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.pickerStyle}
            mode="dropdown"
            selectedValue={this.state.selected}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ selected: itemValue })
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
                  placeholder="company"
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
                  secureTextEntry
                  name="Email"
                />
                </View>
                <Text style={styles.textValidation}>
                  {errors.email && touched.email
                    ? errors.email
                    : null}
                </Text>

                <MyButton onPress={handleSubmit}>Submit</MyButton>
              </View>
            )}
          />
        </View>
        
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "#EFF0F4",
  },
  inputContainer: {
    flex: 1,
    width: "90%",
  },
  inputWrapper: {
    borderBottomColor:"#EFF0F4",
    borderBottomWidth: 1,
  },
  textValidation:{
    color:"red"
  }
});

export default componentName;
