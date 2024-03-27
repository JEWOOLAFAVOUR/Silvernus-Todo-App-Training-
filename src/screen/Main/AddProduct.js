import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddProduct = () => {
    return (
        <View style={styles.page}>
            <Text>AddProduct</Text>
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
})