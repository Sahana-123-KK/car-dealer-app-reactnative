import { StyleSheet,Dimensions } from "react-native";


const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: Dimensions.get("window").height
    },
    titles: {
        marginTop: "30%",
        alignItems: "center"

    },
    title: {
        fontSize: 30,
        fontWeight: "500"
    },
    subtitle: {
        color: "#5C5E62",
        fontSize: 16
    },
    buttonsContainer: {
        position: "absolute",//-->Very useful and handy property
        bottom: 50,
        width: "100%"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",//--> Makes the image display in whole screen may b sometimes whole image wont be displayed
        position: "absolute"
    }

})


export default styles