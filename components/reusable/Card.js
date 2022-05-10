import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from './CustomButton';

function Card({ title, price, imageUri, images, isLiked }) {
    if (title == null) {
        return (
            null
        );
    }
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Product", {
            cardTitle: title,
            cardPrice: price,
            cardImages: images,
            cardImageUri: imageUri,
            cardIsLiked: isLiked,
        })
    }
    return (
        <>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.container}>
                    <View style={styles.cardLeft}>
                        {imageUri && <Image style={styles.cardImage} source={imageUri} />}
                    </View>

                    <View style={styles.cardRight}>
                        <Text style={styles.cardHeading}>{title}</Text>
                        <Text style={styles.cardSubheading}>
                            {price}<Text style={styles.cardPriceCurrency}><MaterialCommunityIcons name='currency-eur' size={14} /> / kg</Text>
                        </Text>
                        <View style={styles.cardRightBottom}>
                            <CustomButton
                                marginBottom={0}
                                marginTop={0}
                                buttonColor={"white"}
                                width={80}
                                height={40}
                                style={styles.test}
                                title={<MaterialCommunityIcons
                                    name="heart-outline"
                                    color="#9586A8"
                                    size={20}
                                />}
                            />
                            <CustomButton
                                marginBottom={0}
                                marginTop={0}
                                buttonColor={"#0BCE83"}
                                width={80}
                                height={40}
                                style={styles.test}
                                title={<MaterialCommunityIcons
                                    name="cart-outline"
                                    color="white"
                                    size={20}
                                />}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignSelf: "center",
        width: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "row",
    },
    cardLeft: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardRight: {
        alignSelf: "stretch",
        alignItems: "flex-start",
        marginLeft: 20,
        width: "100%"
    },
    cardRightBottom: {
        marginTop: 30,
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardHeading: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2D0C57"
    },
    cardSubheading: {
        color: "#2D0C57",
        fontSize: 22,
        fontWeight: "bold"
    },
    cardPriceCurrency: {
        fontSize: 16,
        color: "#9586A8",
        fontWeight: "400"
    },
})

export default Card;
