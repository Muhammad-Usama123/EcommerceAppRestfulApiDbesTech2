import React from 'react'
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTabNavigation from './src/navigation/BottomTabNavigation'
import { Cart, ProductDetails } from './src/screens'

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    regular: require('./App/assets/fonts/Poppins-Regular.ttf'),
    bold: require('./App/assets/fonts/Poppins-Bold.ttf'),
    extraBold: require('./App/assets/fonts/Poppins-ExtraBold.ttf'),
    medium: require('./App/assets/fonts/Poppins-Medium.ttf'),
    light: require('./App/assets/fonts/Poppins-Light.ttf'),
    semiBold: require('./App/assets/fonts/Poppins-SemiBold.ttf'),
  })

const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
    await SplashScreen.hideAsync();
  }
}, [fontsLoaded])

if (!fontsLoaded) {
  return null
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Bottom Navigation'
        component= {BottomTabNavigation}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name='Cart'
        component= {Cart}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name='ProductDetails'
        component= {ProductDetails}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

