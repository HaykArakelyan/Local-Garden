import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from './CustomButton';


import { useSelector, useDispatch } from "react-redux";
import {
    decreaseCount,
    increaseCount,
    addToCart,
    deleteFromCart,
    addToLikedItems,
    deleteFromLikedItems,
} from '../../store/actions';

const { width } = Dimensions.get("window")
const height = width * 0.6;

function ProductCard({ route }) {
    const dispatch = useDispatch();

    const { cardTitle, cardPrice, cardImages, cardImageUri, } = route.params;

    const cart = useSelector((state) => state.cartItem.cart)
    const likedItems = useSelector((state) => state.likedItems.likedItems)


    const [index, setIndex] = useState(0); // No need to insert this into redux
    const changeIndex = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== index) {
            setIndex(slide);
        }
    }


    const isLiked = () => {
        for (let i = 0; i < likedItems.length; i++) {
            if (likedItems[i].cardTitle === cardTitle) {
                return true;
            }
        }
        return false;
    }
    const handleLikeButtonPress = () => {
        if (isLiked()) {
            dispatch(deleteFromLikedItems({
                cardTitle,
                cardPrice,
                cardImageUri,
                cardImages,
            }))
        } else {
            dispatch(addToLikedItems({
                cardTitle,
                cardPrice,
                cardImageUri,
                cardImageUri,
            }))
        }
    }



    const isInCart = () => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].cardTitle = cardTitle) {
                return true;
            }
        }
        return false;
    }
    const handleCartButtonPress = () => {
        if (isInCart()) {
            dispatch(deleteFromCart({
                cardTitle,
                cardPrice,
                cardImageUri,
                cardImages,
                isInCart: false,
            }))
            dispatch(decreaseCount());
        } else {
            dispatch(addToCart({
                cardTitle,
                cardPrice,
                cardImages,
                cardImageUri,
                isInCart: true,
            }))
            dispatch(increaseCount());
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                onScroll={changeIndex}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{
                    width: width,
                    height: height
                }}
            >
                {
                    cardImages.map((image, index) => <Image
                        key={index}
                        source={image}
                        style={{
                            width,
                            height
                        }}
                        resizeMode={"cover"}
                    />
                    )
                }
            </ScrollView>
            <View style={styles.dots}>
                {
                    cardImages.map((i, key) => (
                        <Text key={key} style={key == index ? styles.activePagingDot : styles.pagingDots}>⬤</Text>

                    ))
                }
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={styles.cardTitle}>{cardTitle}</Text>
                    <Text style={styles.cardSubtitle}>{cardPrice}<Text style={styles.cardSubtitleCurrency}><MaterialCommunityIcons name='currency-eur' size={24} /> / piece</Text></Text>
                    <Text style={styles.cardDistribution}>~ 150 gr / piece</Text>
                </View>
                <View>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>
                        Lettuce is an annual plant of the daisy family, Asteraceae.
                        It is most often grown as a leaf vegetable,
                        but sometimes for its stem and seeds.
                        Lettuce is most often used for salads,
                        although it is also seen in other kinds of food,
                        such as soups, sandwiches and wraps; it can also be grilled.
                    </Text>
                </View>
                <View style={styles.cardButtons}>
                    <CustomButton
                        title={<MaterialCommunityIcons
                            name={isLiked() ? "heart" : "heart-outline"}
                            size={20}
                            color={isLiked() ? "red" : "#9586A8"}
                        />}
                        buttonColor={"white"}
                        borderWidth={1}
                        width={"22%"}
                        onPress={() => handleLikeButtonPress()}
                    />
                    <CustomButton
                        title={<MaterialCommunityIcons
                            name={isInCart() ? "cart-off" : 'cart-outline'}
                            size={30}
                            color={"white"}
                        />}
                        buttonColor={isInCart() ? "red" : "#0BCE83"}
                        borderWidth={1}
                        width={"67%"}
                        onPress={() => handleCartButtonPress()}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 29,
    },
    dots: {
        alignSelf: "center",
        flexDirection: "row",
        position: "absolute",
        top: 220,
    },
    pagingDots: {
        color: "#888",
        margin: 3,
    },
    activePagingDot: {
        color: "white",
        margin: 3,
    },
    content: {
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: "70%",
        marginTop: -50,
        paddingHorizontal: 25,
        paddingVertical: 30,
    },
    cardTitle: {
        color: "#2D0C57",
        fontSize: 30,
        marginBottom: 20,
    },
    cardSubtitle: {
        color: "#2D0C57",
        fontSize: 32,
        fontWeight: "700",
    },
    cardSubtitleCurrency: {
        color: "#9586A8",
        fontSize: 24,
    },
    cardDistribution: {
        color: "#06BE77",
        fontSize: 17,
        marginTop: 10,
    },
    descriptionTitle: {
        color: "#2D0C57",
        fontSize: 22,
        fontWeight: "700",
        marginTop: 30,
    },
    descriptionText: {
        color: "#9586A8",
        fontSize: 17,
        paddingTop: 15,
    },
    cardButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }

})

export default ProductCard;
