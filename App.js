import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Home from './Home'
import NosVehicules from './NosVehicules'
import VehiculeItem from './VehiculeItem'


const Stack = createNativeStackNavigator();

const LogoTitle = () => {
    return (
        <Image 
            style={styles.logo}
            source={require('./assets/logo-transparent.png')}
        />
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "#2d4f6c",
                }
            }}>

                <Stack.Screen name='Accueil' component={Home}
                    options={{
                        headerTitle: () => <LogoTitle /> }} 
                        />

                <Stack.Screen name='Nos Vehicules' component={NosVehicules} />

                <Stack.Screen name='DetailsVehicules' component={VehiculeItem}
                    options={({ route }) => ({
                        title: route.params.item.name,
                    })} />
                    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

    logo: {
        width: 50,
        height: 50,
    }
  
  });

export default App