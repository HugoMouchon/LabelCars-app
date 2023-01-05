import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import cars from './cars'

const popularCars = (props) => {

    const carsFilter = cars.filter(car => car.reservations > 5);

    const listBookedCars = () => {
        return carsFilter.map(item => (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("DetailsVehicules", { item })}
            >
                <View style={styles.containerList}>
                    <View style={styles.displayList}>
                        <Image style={styles.vehiculeImage} source={{ uri: item.image }} />
                        <View>
                            <Text style={styles.titreVoiture}>{item.name}</Text>
                            <Text style={styles.textDescription}>{item.price}€ par jour</Text>
                            <Button
                                title="Réserver"
                                accessibilityLabel="Bouton de réservation"
                            />
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        ));
    };

    return (
        <ScrollView>
            <Text style={styles.title}>Les plus réservés</Text>
            <FlatList
                keyExtractor={item => item.id}
                data={carsFilter}
                renderItem={({ item }) => listBookedCars()}
                numColumns={1}
            />
        </ScrollView>
    );
};


const vw = Dimensions.get("window").width;
const vh = Dimensions.get("window").height;

const styles = StyleSheet.create({

    containerList: {
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    displayList: {
        width: "100%",
        backgroundColor: '#CECECE',
        borderRadius: 10,
        elevation: 10,
        padding: 20
    },

    bookedDesc: {
        padding: 10,
    },

    vehiculeImage: {
        width: "100%",
        height: 100,
        resizeMode: 'contain'
    },

    titreVoiture: {
        fontWeight: 'bold',
    },

    textDescription: {
        textAlign: 'left',
        paddingBottom: 15
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        color: "#2d4f6c",
        paddingBottom: 15
    }
})

export default popularCars