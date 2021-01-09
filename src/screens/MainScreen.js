import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Button, BackHandler, Alert } from 'react-native';
import Constants from 'expo-constants';

import { THEME } from '../theme';
import { AppTextGoldmanBold } from '../components/AppTextGoldmanBold';
import { AppButton } from '../components/AppButton';
import { AppButtonPro } from '../components/AppButtonPro';

export const MainScreen = ({ navigation }) => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert(
                'Close the app',
                `Are you sure to close the app? Your status bar's height: ${Constants.statusBarHeight} px.`,
                [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    {
                        text: 'Yes',
                        onPress: () => BackHandler.exitApp(),
                    },
                ]
            );
            return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.container}>
            <AppTextGoldmanBold style={styles.text}>Main Screen</AppTextGoldmanBold>
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
            <AppButton
                title='AppButton (to blocks)'
                action={() => navigation.push('Blocks')}
                color={'brown'}
            />
            <AppButtonPro
                text='AppButtonPro (to Addition)'
                action={() => navigation.push('Addition')}
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
        fontSize: 32,
    }
});
