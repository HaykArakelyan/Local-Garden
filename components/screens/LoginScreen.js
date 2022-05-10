import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


import { useNavigation } from '@react-navigation/native';

import Input from "../reusable/Input";
import CustomButton from '../reusable/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function LoginScreen(props) {
    // const [isAuth, setIsAuth] = useState(false);

    const navigation = useNavigation();

    const handleLogIn = () => {
        if (true) {
            navigation.navigate("Dashboard");
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.loginImage} source={require("../../assets/images/LoginBG.png")} />
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name='treasure-chest' size={60} />
            </View>
            <View style={styles.content}>
                <View style={styles.loginHeadings}>
                    <Text style={styles.title}>Local Garden</Text>
                    <Text style={styles.subTitle}>Because you deserve to eat fresh</Text>
                </View>
                <View style={styles.loginInputs}>
                    <Text style={styles.inputHeadings}>Email</Text>
                    <Input placeholder={"example@example.com"} />
                    <Text style={styles.inputHeadings}>Password</Text>
                    <Input />
                    <CustomButton
                        style={styles.loginButton}
                        title={"LOGIN"}
                        buttonColor={"#40CE85"}
                        textColor={"white"}
                        onPress={handleLogIn}

                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 29,// from my device. Should use Dimensions
        justifyContent: "flex-end",
        backgroundColor: "#A054FC"
    },
    content: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    iconContainer: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 90,
        height: 90,
        bottom: 80,
        borderRadius: 50
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#2D0C57"
    },
    subTitle: {
        fontSize: 17,
        color: "#9586A8"
    },
    loginImage: {
        position: "absolute",
        top: 0
    },
    loginHeadings: {
        alignItems: "center",
        paddingTop: 30,
        marginTop: 50
    },
    inputHeadings: {
        paddingHorizontal: 40,
        color: "#9586A8",
        marginTop: 40
    },

})

export default LoginScreen;