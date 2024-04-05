import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLOR, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
    const navigation = useNavigation();

    const [userName, setUserName] = useState('')

    const handleSubmit = async () => {
        try {

            if (userName === "") {
                console.log('Enter Name Details')
            } else {
                await AsyncStorage.setItem('name', userName)
                console.log('name saved successfully')
                navigation.navigate('Main')
            }
        } catch (error) {
            console.log('error while saving', error)
        }
    }

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: SIZES.h2, color: COLOR.black, fontWeight: 'bold' }}>Login Page</Text>


            <Text>Welcome to Favour Todo Application</Text>
            {/* INPUTS */}
            <View style={{ marginTop: SIZES.h5 }}>
                <Text>Name</Text>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Enter name'
                        value={userName}
                        onChangeText={(data) => setUserName(data)}

                    />
                </View>
            </View>

            <TouchableOpacity onPress={() => handleSubmit()} style={styles.btn}>
                <Text style={{ fontSize: 16, color: COLOR.white }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLOR.white,
        paddingHorizontal: SIZES.p,
        paddingTop: SIZES.h3
    },
    container: {
        height: SIZES.big,
        borderWidth: 1,
        marginTop: SIZES.base,
        justifyContent: 'center',
        paddingHorizontal: SIZES.p
    },
    btn: {
        height: SIZES.big * 1.3,
        backgroundColor: COLOR.primary,
        borderRadius: SIZES.base,
        marginTop: SIZES.h1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})