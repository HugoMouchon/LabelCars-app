import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Home from './Home'
import NosVehicules from './NosVehicules'
import VehiculeItem from './VehiculeItem'
import cars from './cars'


const Stack = createNativeStackNavigator();

const App = (item) => {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "#2d4f6c",
                }
            }}>

                <Stack.Screen name='Accueil' component={Home} />
                <Stack.Screen name='NosVehicules' component={NosVehicules} />
                <Stack.Screen name='DetailsVehicules' component={VehiculeItem} title={item.name}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App