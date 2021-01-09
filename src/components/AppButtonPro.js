import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const AppButtonPro = ({ styleWrapper, styleText, action, text }) => {
    return (
        <TouchableOpacity style={{ ...styles.buttonWrapper, ...styleWrapper }} onPress={action} activeOpacity={0.6}>
            <Text style={{ ...styles.buttonText, ...styleText }}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        paddingVertical: 2,
        paddingHorizontal: 15,
        borderRadius: 25,
        margin: 5,
        elevation: 5,
        backgroundColor: 'green',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'goldman-regular',
        textAlign: 'center',
    },
});
