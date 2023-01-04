import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Home from './Home'


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light"/>
                <Stack.Navigator screenOptions={{
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: "#2d4f6c",
                    }
                }}>

                    <Stack.Screen name='Accueil' component={Home}/>
                    </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App