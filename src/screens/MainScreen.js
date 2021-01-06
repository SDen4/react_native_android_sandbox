import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { THEME } from '../theme';

export const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Main Screen</Text>
            <Button
                color={THEME.DANGER_COLOR}
                title="Go to About"
                onPress={() => navigation.push('About')}
            />
            <Button
                color={THEME.DANGER_COLOR}
                title="Go to List"
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
