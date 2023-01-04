import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';

export default function Home() {

  return (
    <View>
      <Text>Coucou</Text>
      <Image source={require("./assets/hero.jpg")} />
    </View>
  );
}

const vw = Dimensions.get("window").width;
const vh = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
