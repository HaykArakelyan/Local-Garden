import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function CustomButton({
    title,
    buttonColor,
    textColor,
    height = 60,
    width = "90%",
    marginTop = 70,
    marginBottom = 100,
    borderWidth = 0,
    borderColor = "#D9D0E3",
    borderStyle = "solid",
    onPress = null
}) {
    return (
        <TouchableOpacity style={{
            backgroundColor: buttonColor,
            height: height,
            width: width,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            alignSelf: "center",
            marginBottom: marginBottom,
            marginTop: marginTop,
            borderColor: borderColor,
            borderWidth: borderWidth,
            borderStyle: borderStyle,
        }}
            onPress={onPress}
        >
            <Text style={{
                fontWeight: "bold",
                color: textColor,
                fontSize: 15,
            }}>{title}</Text>
        </TouchableOpacity>
    );
}
export default CustomButton;