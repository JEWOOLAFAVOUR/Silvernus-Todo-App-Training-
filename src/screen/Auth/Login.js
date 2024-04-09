import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLOR, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormButton from '../../components/Button/FormButton';
import FormInput from '../../components/Input/FormInput';
import { loginUser, registerUser } from '../../api/auth';
import Toast from 'react-native-toast-message';


const Login = () => {
    const navigation = useNavigation();

    // STATES 
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const favour = {
        name: 'Favour',
        level: {
            name: '400',
            type: 400,
        },
        age: 10,
        passion: ['tech', 'coding']
    }

    console.log(favour.name)



    const handleSubmit = async () => {
        if (firstname === "") {
            console.log('First Name is missing!')
        } else if (lastname === "") {
            console.log("Last Name is missing!")
        } else if (email === "") {
            console.log('Email is missing!')
        } else if (password === "") {
            console.log('Password is missing!')
        } else {

            const body = { firstname, lastname, email, password }
            console.log('details submitted', body)

            const { status, data } = await loginUser(body);

            console.log('response from login api', data)
            if (status < 300) {
                Toast.show({
                    type: 'success',
                    text1: data?.message || 'No message',
                })
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'A problem occured',
                })
            }


        }
    }


    return (
        <View style={styles.page}>
            <Text style={{ fontSize: SIZES.h2, color: COLOR.black, fontWeight: 'bold' }}>Login Page</Text>


            <Text style={{ fontSize: SIZES.h5, color: COLOR.black, marginVertical: SIZES.h3 }}>Welcome to Favour Todo Application</Text>
            {/* INPUTS */}

            <FormInput title="First Name" placeholder={'enter your firstname'} value={firstname} setValue={setFirstName} />
            <FormInput title="Last Name" placeholder={'enter your lastname'} value={lastname} setValue={setLastName} />
            <FormInput title="Email" placeholder={'enter your email'} value={email} setValue={setEmail} />
            <FormInput title="Password" placeholder={'enter your password'} value={password} setValue={setPassword} />
            {/* BUTTONS */}
            <FormButton title="Login" onPress={() => handleSubmit()} />
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