import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import OtherScreen from "./OtherScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductCard from '../reusable/ProductCard';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#7D00FB",
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons
                        name='apps'
                        size={size}
                        color={color}
                    />,
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons
                        name='cart-outline'
                        size={size}
                        color={color}
                    />
                }}
            />
            <Tab.Screen
                name="OtherScreen"
                component={OtherScreen}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons
                        name='dots-vertical'
                        size={size}
                        color={color}
                    />
                }}
            />
        </Tab.Navigator>
    )
}

function Dashboard(props) {
    return (
        <>
            <TabNavigator />
        </>
    );
}

const styles = StyleSheet.create({
    container: {

    },
})

export default Dashboard;