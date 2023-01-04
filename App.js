import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light">
                <Stack.Navigator screenOptions={{
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: "#2d4f6c"
                    }
                }} />

                <Stack.Screen name='Accueil' component={Home} />
                <Stack.Screen name='CoffeeItem' component={CoffeeItem} options={{ title: "Détail du café" }} />
            </StatusBar>
        </NavigationContainer>
    )
}

export default App