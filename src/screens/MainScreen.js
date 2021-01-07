import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Button, BackHandler, Alert } from 'react-native';

import { THEME } from '../theme';

export const MainScreen = ({ navigation }) => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Close the app', 'Are you sure to close the app?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => BackHandler.exitApp(),
                },
            ]);
            return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Main Screen</Text>
            <Button
                color={THEME.DANGER_COLOR}
                title='Go to About'
                onPress={() => navigation.push('About')}
            />
            <Button
                color={THEME.DANGER_COLOR}
                title='Go to List'
                onPress={() => navigation.push('List')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
    },
});
