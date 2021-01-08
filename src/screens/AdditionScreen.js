import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, View, Text } from 'react-native';

export const AdditionScreen = () => {
    const [indicator, showIndicator] = useState(false);

    let content = indicator && <ActivityIndicator size='large' color='red' />;
    let title = indicator ? 'Hide' : 'Show me an Activity indicator';

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Addition screen</Text>
            <Button title={title} onPress={() => showIndicator(!indicator)} />
            <View style={styles.indicator}>{content}</View>
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
        marginBottom: 20,
        fontSize: 36,
        fontFamily: 'yellowtail-regular',
    },
    indicator: {
        marginTop: 50,
    },
});
