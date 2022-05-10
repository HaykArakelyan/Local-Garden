import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

function Input({ placeholder, value, textColor = "black" }) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        height: 60,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        alignSelf: "center",
    }
})

export default Input;