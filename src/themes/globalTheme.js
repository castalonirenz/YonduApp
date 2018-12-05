import { StyleSheet } from "react-native";

export const MyTheme = StyleSheet.create({
    Container:{
        flex: 1,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
     
    },
    imageLogo:{
        height: 150,
        width: 150
    },
    displayText:{
       // color:"#298F78",
       color:"red",
        fontSize: 20,
        fontWeight: 'bold',
    }
})