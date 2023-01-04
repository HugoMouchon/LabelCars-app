import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import cars from './cars';

export default function Home(props) {

  const boutonListVoiture = (item) => {
    return (
      <TouchableOpacity
        style={styles.coffeeItem}
        onPress={() => props.navigation.navigate("NosVehicules", { item })}
      >
        <Image source={require("./assets/hero.jpg")} style={styles.img}/>
        <Text style={styles.titre}>{ cars.length } Véhicules à découvrir</Text>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {boutonListVoiture()}
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
  }

});


