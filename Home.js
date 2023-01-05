import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import cars from './cars';
import popularCars from './PopularCars';

export default function Home(props) {

  const boutonListVoiture = (item) => {
    return (
      <TouchableOpacity
        style={styles.coffeeItem}
        onPress={() => props.navigation.navigate("Nos Vehicules", { item })}
      >
        <Image source={require("./assets/hero.jpg")} style={styles.img} />
        <Text style={styles.titre}>{cars.length} Véhicules à découvrir</Text>
      </TouchableOpacity>
    )
  }

  // const popularCars = cars.filter(car => car.reservations > 5);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {boutonListVoiture()}
      </View>
        {popularCars()}
      <View>
      </View>
    </View>
  );
}

const vw = Dimensions.get("window").width;
const vh = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  card: {
    padding: 20
  },

  bookedcards: {
    backgroundColor: '#CECECE',
    borderRadius: 10,
    elevation: 10,
    margin: 15

  },

  img: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },

  titre: {
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 10,
    paddingBottom: 10,
    fontSize: 19,
    fontWeight: 'bold',
  },

  vehiculeImage: {
    width: "50%",
    height: 150,
    resizeMode: 'contain'
  },

  titreVoiture: {
    fontWeight: 'bold',
  },

});


