import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLOR, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormButton from '../../components/Button/FormButton';
import FormInput from '../../components/Input/FormInput';


const Login = () => {
    const navigation = useNavigation();


    const handleSubmit = () => {

    }


    return (
        <View style={styles.page}>
            <Text style={{ fontSize: SIZES.h2, color: COLOR.black, fontWeight: 'bold' }}>Login Page</Text>


            <Text>Welcome to Favour Todo Application</Text>
            {/* INPUTS */}

            <FormInput title="First Name" placeholder={'enter your firstname'} />
            <FormInput title="Last Name" placeholder={'enter your lastname'} />
            <FormInput title="Email" placeholder={'enter your email'} />
            <FormInput title="Password" placeholder={'enter your password'} />
            {/* BUTTONS */}
            <FormButton title="Login" />
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
})