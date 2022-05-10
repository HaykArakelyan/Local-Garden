import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

function Filter({ title, count = 0 }) {
    const [isChosen, setIsChoosen] = useState(false);

    const hadnleIgnore = () => {
        setIsChoosen(!isChosen);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => hadnleIgnore()}>
            <View style={styles.content}>
                {!isChosen && <Text style={styles.contentText}>{title}({count})</Text>}
                {isChosen && <Text style={styles.choseContentText}><MaterialCommunityIcons name='check' size={17} color={"#6C0EE4"} />{title}({count})</Text>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        margin: 3
    },
    content: {
        alignSelf: "center",
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 10,
    },
    contentText: {
        paddingHorizontal: 10,
        color: "#9586A8",
    },
    choseContentText: {
        color: "#6C0EE4",
        backgroundColor: "#E2CBFF",
        textAlignVertical: "center",
        borderRadius: 50,
        paddingHorizontal: 10,

    }
})

export default Filter;