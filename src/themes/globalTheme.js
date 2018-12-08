import { StyleSheet } from "react-native";

export const MyTheme = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
   justifyContent: "center"
    // backgroundColor:"#FFFFFF"
  },
  imageLogo: {
    height: 150,
    width: 150
  },
  displayText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  displayImage: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  displayImageWrapper: {
    width: "100%",
    flex: 1
  },
  headerWrapper: {
    textAlign: "center",
    width: "80%"
  },
  inputWrapper: {
    borderBottomColor: "#EFF0F4",
    borderBottomWidth: 2
  },
  headerText: {
    color: "black",
    fontSize: 20,
    
  },
  textContent: {
    color: "gray",
    fontSize: 17
  }
});
