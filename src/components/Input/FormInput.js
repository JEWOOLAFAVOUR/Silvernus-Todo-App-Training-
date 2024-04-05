import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const FormInput = ({ title, placeholder, value, setValue }) => {
    return (
        <View style={{ marginBottom: SIZES.h5 }}>
            <Text>{title}</Text>
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


export default FormInput

const styles = StyleSheet.create({
    container: {
        height: SIZES.big,
        borderWidth: 1,
        marginTop: SIZES.base,
        justifyContent: 'center',
        paddingHorizontal: SIZES.p
    },
})