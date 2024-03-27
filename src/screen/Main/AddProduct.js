import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { COLOR, SIZES } from '../../constants/theme'

const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')


    const FormButton = ({ name, placeholder, value, setValue }) => {
        return (
            <View style={{ marginBottom: 10 }}>
                <Text>{name}</Text>
                <View style={styles.container}>
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={setValue}
                    />
                </View>
            </View>
        )
    }

    const handleSubmit = () => {
        console.log('submitted data', title, price, description, category)
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: title,
                    price: title,
                    address: [],
                    description: description,
                    image: 'https://i.pravatar.cc',
                    category: category
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }


    return (
        <View style={styles.page}>
            <Text>Add Product Screen</Text>
            <View style={{ marginTop: SIZES.h5 }}>
                <FormButton name="Title" placeholder="Enter Name" value={title} setValue={setTitle} />
                <FormButton name="Price" placeholder="Enter Pricee" value={price} setValue={setPrice} />
                <FormButton name="Description" placeholder="Enter Desription" value={description} setValue={setDescription} />
                <FormButton name="Category" placeholder="Enter Category" value={category} setValue={setCategory} />
            </View>

            <TouchableOpacity onPress={() => handleSubmit()} style={styles.btn}>
                <Text style={{ fontSize: 16, color: COLOR.white }}>Add Product</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AddProduct

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 30,
        backgroundColor: '#ffffff',
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