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
        minWidth: 150,
        minHeight: 100,
        margin: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    text: {
        fontFamily: 'goldman-regular',
        fontSize: 18,
        marginRight: 5,
    },
});
