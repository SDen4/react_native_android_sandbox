import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const AppButtonPro = ({ text, action, gradientColors, styleButton, styleText }) => {
    return (
        <TouchableOpacity style={styles.container_default} onPress={action} activeOpacity={0.6}>
            <LinearGradient
                colors={gradientColors}
                style={{ ...styles.button_default, ...styleButton }}
            >
                <Text style={{ ...styles.buttonText_default, ...styleText }}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container_default: {
        justifyContent: 'center',
    },
    button_default: {
        elevation: 8,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    buttonText_default: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'goldman-regular',
        textAlign: 'center',
    },
});
