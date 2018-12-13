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
import { Company } from "../../../Array/SoftwareArray";
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
          color={"#FFF"}
          size={24}
        />
      </TouchableOpacity>
    )
  });

  render() {
    let headerFontSize;
    let contentFontSize;

    if (Dimensions.get("window").width <= 360) {
      headerFontSize = 15;
      contentFontSize = 14;
    } else {
      contentFontSize = 17;
      headerFontSize = 20;
    }
    return (
      <View style={MyTheme.Container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.textHeader}>
            <Text style={[MyTheme.headerText, { fontSize: headerFontSize }]}>
              Lorem ipsum dolor sit amet
            </Text>
              <Text
                style={[MyTheme.textContent, { fontSize: contentFontSize, width:"50%", textAlign:"center"}]}
              >
                Quisque a est vel tortor lobortis scelerisque vitae id risus.
              </Text>
              {/* <Text
                style={[MyTheme.textContent, { fontSize: contentFontSize }]}
              >
                lobortis scelerisque
              </Text>
              <Text
                style={[MyTheme.textContent, { fontSize: contentFontSize }]}
              >
                vitae id risus.
              </Text> */}
          </View>
          <View />
          <View style={styles.itemHolder}>
            {industries.map((items, index) => (
              <View key={index} style={styles.detailsWrapper}>
                <View style={styles.imageContainer}>
                  <Image style={styles.imageSize} source={items.image} />
                  <Text
                    style={[MyTheme.headerText, { fontSize: headerFontSize }]}
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
    alignItems: "center",
    justifyContent: 'center',
  },
  itemHolder: {
    alignItems: "center",
    flex: 3,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20
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
