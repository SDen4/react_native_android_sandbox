import React from 'react';
import { ToastAndroid, Button } from 'react-native';

export const ListButton = () => {
    const toastAndroid = () =>
        ToastAndroid.showWithGravityAndOffset(
            'Test test of ToastAndroid',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            0,
            300
        );
    return <Button title='test toast android' onPress={() => toastAndroid()} />;
};
