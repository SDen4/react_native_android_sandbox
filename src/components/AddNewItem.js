import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { AppButtonPro } from './AppButtonPro';

export const AddNewItem = () => {
    const [text, setText] = useState('');

    const createNewItem = () => {
        if (text.trim().length < 2) {
            Alert.alert('Attention!', "New item could't be empty!");
        } else {
            Alert.alert('Success!', `New item "${text}" has been added!`);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setText}
                keyboardType='default'
                autoCapitalize='none'
                autoCorrect={true}
                value={text}
                placeholder='enter a new item'
                style={styles.input}
            />
            <AppButtonPro
                text='Add'
                action={createNewItem}
                gradientColors={['#DC143C', '#FF0000']}
                styleButton={styles.button}
                styleText={styles.buttonText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
    },
    input: {
        marginRight: 10,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        width: '70%',
        borderRadius: 5,
        fontSize: 18,
        fontFamily: 'goldman-regular',
    },
    button: {
        borderRadius: 5,
        paddingVertical: 5,
        fontSize: 18,
    },
    buttonText: {
        color: '#fff',
    },
});
