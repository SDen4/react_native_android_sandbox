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
            <View style={styles.buttonWrapper}>
                <Button
                    color={THEME.DANGER_COLOR}
                    title='Simple button'
                    onPress={() => navigation.push('About')}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <AppButton
                    title='AppButton'
                    action={() => navigation.push('Blocks')}
                    color={'brown'}
                />
            </View>
            <AppButtonPro
                text='AppButtonPro'
                action={() => navigation.push('Addition')}
                gradientColors={['#004d40', '#009688']}
                styleButton={styles.appButtonPro_button}
                styleText={styles.appButtonPro_text}
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
    buttonWrapper: {
        marginBottom: 10,
        width: '40%',
    },
    text: {
        fontSize: 32,
    },
    appButtonPro_button: {
        borderRadius: 10,
    },
    appButtonPro_text: {
        color: 'orange',
    },
});
