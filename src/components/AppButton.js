import React from 'react';
import { Button } from 'react-native';

export const AppButton = ({ title, action, color }) => {
    return <Button title={title} onPress={action} color={color} />;
};
