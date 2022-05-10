import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TextInput } from 'react-native';

import Card from '../reusable/Card';
import Filter from '../reusable/Filter';

import { data } from '../../store/data';


function HomeScreen(props) {
    const scrollView = useRef();



    const [filter, setFilter] = useState([
        "Cabbage and lettuce",
        "Cucumbers and tomatoes",
        "Onions and garlic",
        "Peppers",
        "Potatoes",
    ]);

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.vegetablesBg}
                    source={require("../../assets/images/Vegetables.png")}
                />
            </View>
            <Text style={styles.vegetablesHeading}>Vegetables</Text>
            <View style={styles.search}>
                <MaterialCommunityIcons style={styles.magnify} name='magnify' size={40} />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search'
                />
            </View>
            <View style={styles.filters}>
                {filter.map((item) => <Filter key={item} title={item} />)}
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={scrollView}
            >
                {data.map((card) => <Card
                    key={card.title}
                    title={card.title}
                    price={card.price}
                    imageUri={card.imageUri}
                    images={card.images}
                    isLiked={card.isLiked}
                />
                )}
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        top: 19,
        alignSelf: "flex-end",
        backgroundColor: "#F6F5F5",
    },
    vegetablesBg: {
        alignSelf: "flex-end",
    },
    vegetablesHeading: {
        fontSize: 30,
        color: "#2D0C57",
        alignSelf: "flex-start",
        paddingHorizontal: 20,
        marginBottom: 40

    },
    search: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
        width: "90%",
        borderRadius: 25,
        paddingHorizontal: 10,
        backgroundColor: "white"

    },
    searchInput: {
        height: 50,
        width: "90%",
    },
    magnify: {
        alignSelf: "center",
    },
    filters: {
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 40
    }
})

export default HomeScreen;
