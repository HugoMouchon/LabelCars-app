import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'

const VehiculeItem = (props) => {

    const [item, setItem] = useState(props.route.params.item)

    const Options = () => {
        return (
            <Text>

            </Text>
        );
    }

    return (
        <View style={styles.viewContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.containerIcones}>
                <View style={styles.iconeDesc}>
                    <Image source={require("./assets/icons/engine.png")} style={styles.icones} />
                    <Text style={styles.texteCenter}>{item.options.transmission}</Text>
                </View>

                <View style={styles.iconeDesc}>
                    <Image source={require("./assets/icons/doors.png")} style={styles.icones} />
                    <Text style={styles.texteCenter}>{item.options.person}</Text>
                </View>

                <View style={styles.iconeDesc}>
                    <Image source={require("./assets/icons/compass.png")} style={styles.icones} />
                    <Text style={styles.texteCenter}>{item.aircondition}</Text>
                </View>

                <View style={styles.iconeDesc}>
                    <Image source={require("./assets/icons/snow.png")} style={styles.icones} />
                    <Text style={styles.texteCenter}>{item.navigation}</Text>
                </View>
            </View>
        </View>
    )
}

const vw = Dimensions.get("window").width;
const vh = Dimensions.get("window").height;

const styles = StyleSheet.create({

    iconeDesc: {
        width: "50%",
        alignItems: 'center',
        paddingBottom: 60
    },

    viewContainer: {
        width: vw,

    },

    containerIcones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    productImage: {
        width: "100%",
        resizeMode: 'contain',
        height: 400,
    },

    texteCenter: {
        textAlign: 'center',
        fontWeight: 'bold',
    },

    icones: {
        width: 50,
        height: 50,
    }
})

export default VehiculeItem