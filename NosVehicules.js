import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, resizeMode } from 'react-native'
import cars from './cars'

const NosVehicules = (props) => {

    const [item, setItem] = useState(props.route.params.item)

    const listVoitures = (item) => {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => props.navigation.navigate("DetailsVehicules", { item })}
            >
                    <View style={styles.containerList}>
                        <Image style={styles.vehiculeImage} source={{ uri: item.image }} />
                        <View>
                            <Text style={styles.titreVoiture}>{item.name}</Text>
                            <Text style={styles.textDescription}>{item.price}€ par jour</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={item => item.id}
                data={cars}
                renderItem={({ item }) => listVoitures(item)}
                numColumns={1}
            />
        </View>
    )
}

const vw = Dimensions.get("window").width;
const vh = Dimensions.get("window").height;

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#CECECE',
        borderRadius: 10,
        elevation: 10,
        margin: 15
        
    },

    containerList: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        width: vw,
    },

    vehiculeImage: {
        width: "50%",
        height: 150,
        resizeMode: 'contain'
    },

    titreVoiture: {
        fontWeight: 'bold',
    }
})

export default NosVehicules