import { StyleSheet } from "react-native";

export const MyTheme = StyleSheet.create({
    Container:{
        flex: 1,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor:"#FFFFFF"
     
    },
    imageLogo:{
        height: 150,
        width: 150
    },
    displayText:{
        color:"#298F78",
        
        fontSize: 20,
        fontWeight: 'bold',
    },
    displayImage:{
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent:"center"
    },
    displayImageWrapper:{
        width:"100%",
        flex: 1,
    },
    headerWrapper:{
        textAlign: 'center', 
        width:"80%"
    }
})