import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 30,
        zIndex: 300, //--> It would not have been displayed bcoz it is underneath the image, so we need to add its zIndex, when postion is absolute, it goes down.
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        width: "100%"

    },
    logo: {
        resizeMode: "contain",//--> When width is give, some part might take that given width, if we want whole image to come into the display then this property is needed
        width: 100
    },
    menu: {
        width: 30,
        height: 30,
        resizeMode: "contain"

    }
})

export default styles