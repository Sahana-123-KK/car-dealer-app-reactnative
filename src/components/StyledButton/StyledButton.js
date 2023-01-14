import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from "./style"

const StyledButton = ({type,content,onPress}) => {
    const backgroundColor = (type==="primary" ? "#171A20CC" :"#FFFFFFA6")
    const colorText  = (type==="primary" ? "#FFFFFF" : "171A20")
    return (
        <View style={styles?.container}>
            <Pressable
                style={[styles?.button,{backgroundColor:backgroundColor}]}
                onPress={() => {
                    onPress()
                }}
            >
                <Text style={[styles?.text,{color:colorText}]}>{content} </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton