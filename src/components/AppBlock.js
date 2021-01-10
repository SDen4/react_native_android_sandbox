import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppBlock = (props) => {
    return (
        <View style={{ ...styles.default, ...props.style }}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        width: 120,
        height: 80,
        margin: 15,
        backgroundColor: 'red',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        elevation: 7,
        opacity: 0.7,
    },
    text: {
        fontFamily: 'goldman-regular',
        fontSize: 18,
        marginRight: 5,
    },
});
