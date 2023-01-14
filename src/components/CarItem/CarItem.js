import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from "./style"
import StyledButton from '../StyledButton/StyledButton'
const CarItem = ({name,tagline,image}) => {
 
    return (
        <View style={styles?.cardContainer}>
            <ImageBackground source={image} style={styles?.image} />
            <View style={styles?.titles}>
                <Text style={styles?.title}>{name} </Text>
                <Text style={styles?.subtitle} >{tagline} </Text>
            </View>
            <View style={styles?.buttonsContainer}>
                <StyledButton type={"primary"} content="Custom Order" onPress={() => {
                    console.warn("Custom Order was Pressed")
                }} />
                <StyledButton type={"secondary"} content="Existing Inventory" onPress={() => {
                    console.warn("Existing Inventory was Pressed")
                }} />

            </View>
        </View>
    )
}

export default CarItem