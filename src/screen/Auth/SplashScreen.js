import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLOR, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = ({ }) => {
    const navigation = useNavigation();

    const handleNext = () => {
        navigation.navigate("Login")
    }

    useEffect(() => {
        setTimeout(() => {
            handleNext();
        }, 2000)
    }, [])

    return (
        <View style={styles.page}>
            <Text style={{ color: COLOR.white, fontSize: SIZES.h1, fontWeight: 'bold' }}>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLOR.primary,
        justifyContent: "center",
        alignItems: "center",
    },
})