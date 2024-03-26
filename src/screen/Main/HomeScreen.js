import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {

    const [userDetail, setUserDetail] = useState('')
    const [product, setProduct] = useState([]);

    console.log('user details from home page', userDetail)

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            if (value !== null) {
                setUserDetail(value)
            }
        } catch (e) {
            console.log('error of saving', value)
        }
    };

    useEffect(() => {
        getData();
    }, [])


    const getAllProduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                // console.log('data fetching from endpoints', data)
                setProduct(data)

            })
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    return (
        <View style={styles.page}>
            <Text>My name is {userDetail}</Text>
            <FlatList
                data={product}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
})