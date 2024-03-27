import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screen/Auth/SplashScreen';
import Login from '../screen/Auth/Login';
import AddProduct from '../screen/Main/AddProduct';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='AddProduct' component={AddProduct} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})