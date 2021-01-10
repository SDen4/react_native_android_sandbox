import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListButton } from '../components/ListButton';
import { AddNewItem } from '../components/AddNewItem';

export const ListScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>List Screen</Text>
            <AddNewItem />
            <ListButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#888888',
    },
    text: {
        fontSize: 32,
        fontFamily: 'goldman-regular',
        marginBottom: 20,
    },
});
