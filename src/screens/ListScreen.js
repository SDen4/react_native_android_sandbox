import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const ListScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>List Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
});