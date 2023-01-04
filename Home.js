import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function Home() {

  const boutonListVoiture = (item) => {
    return (
      <TouchableOpacity
        style={styles.coffeeItem}
        onPress={() => props.navigation.navigate("CoffeeItem", { item })}
      >
        <Image source={require("./assets/hero.jpg")} style={styles.img}/>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {boutonListVoiture()}
      </Card>
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
  }

});


