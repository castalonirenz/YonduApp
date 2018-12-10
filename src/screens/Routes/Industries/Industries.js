import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { MyTheme } from "../../../themes/globalTheme";
import { Company } from "../../../Array/stringName";
import Icon from "react-native-vector-icons/Ionicons";
import { industries } from "../../../Array/industriesArray";

class Industries extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: Company.itemTwo,
    headerTitleStyle: MyTheme.headerWrapper,
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{ paddingLeft: 20 }}
      >
        <Icon
          name="md-menu"
          // color={tintColor}
          size={24}
        />
      </TouchableOpacity>
    )
  });
  state = {
    headerFontSize: 20,
    contentFontSize: 17
  };

  componentDidMount() {
    if (Dimensions.get("window").width <= 360) {
      this.setState({ headerFontSize: 15, contentFontSize: 14 });
    }
  }

  render() {
    return (
      <View style={MyTheme.Container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.textHeader}>
            <Text
              style={[
                MyTheme.headerText,
                { fontSize: this.state.headerFontSize }
              ]}
            >
              Lorem ipsum dolor sit amet
            </Text>
            <View style={styles.textContentWrapper}>
              <Text
                style={[
                  MyTheme.textContent,
                  { fontSize: this.state.contentFontSize }
                ]}
              >
                Quisque a est vel tortor
              </Text>
              <Text
                style={[
                  MyTheme.textContent,
                  { fontSize: this.state.contentFontSize }
                ]}
              >
                lobortis scelerisque
              </Text>
              <Text
                style={[
                  MyTheme.textContent,
                  { fontSize: this.state.contentFontSize }
                ]}
              >
                vitae id risus.
              </Text>
            </View>
          </View>
          <View />
          <View style={styles.itemHolder}>
            {industries.map((items, index) => (
              <View key={index} style={styles.detailsWrapper}>
                <View style={styles.imageContainer}>
                  <Image style={styles.imageSize} source={items.image} />
                  <Text
                    style={[
                      MyTheme.headerText,
                      { fontSize: this.state.headerFontSize }
                    ]}
                  >
                    {items.name}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    marginTop: 20,
    flex: 1,
    alignItems: "center"
  },
  headerText: {
    color: "black",
    fontSize: 20
  },
  textContentWrapper: {
    marginTop: 20,
    alignItems: "center"
  },
  itemHolder: {
    alignItems: "center",
    flex: 3,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  detailsWrapper: {
    width: "50%",
    marginTop: 40
  },
  imageSize: {
    height: 70,
    width: 70
  },
  imageContainer: {
    width: "100%",
    alignItems: "center"
  }
});
export default Industries;
