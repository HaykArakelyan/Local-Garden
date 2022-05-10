import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import Card from '../reusable/Card';



function CartScreen(props) {

    const count = useSelector((state) => state.numberOfCartItems.count);
    const data = useSelector((state) => state.likedItems.likedItems);
    const cart = useSelector((state) => state.cartItem.cart);
    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((item) => <Card
                    key={`${Math.random()}` + new Date()}//just for random id
                    title={item.cardTitle}
                    price={item.cardPrice}
                    imageUri={item.cardImageUri}
                    images={item.cardImages}
                />)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default CartScreen;