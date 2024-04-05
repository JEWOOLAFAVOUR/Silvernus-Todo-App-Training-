import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR, SIZES } from '../../constants/theme'

const FormButton = () => {
    return (
        <TouchableOpacity onPress={() => { }} style={styles.btn}>
            <Text style={{ fontSize: 16, color: COLOR.white }}>Continue</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    btn: {
        height: SIZES.big * 1.3,
        backgroundColor: COLOR.primary,
        borderRadius: SIZES.base,
        marginTop: SIZES.h1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})