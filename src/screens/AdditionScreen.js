import React, { useState } from 'react';
import {
    ActivityIndicator,
    Button,
    StyleSheet,
    View,
    Text,
    ImageBackground,
    StatusBar,
} from 'react-native';

export const AdditionScreen = () => {
    const [indicator, showIndicator] = useState(false);
    const [statusbar, hideStatusbar] = useState(false);

    let content = indicator && <ActivityIndicator size='large' color='red' />;
    let title = indicator ? 'Hide' : 'Show me an Activity indicator';

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bg.jpg')} style={styles.bgImage}>
                <Text style={styles.text}>Addition screen</Text>
                <Button title={title} onPress={() => showIndicator(!indicator)} />
                <View style={styles.indicator}>{content}</View>
                <Text style={styles.text}>Hide the status bar</Text>
                <Button title='Hide the status bar' onPress={() => hideStatusbar(!statusbar)} />
                <StatusBar hidden={statusbar} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: Constants.statusbarHeight,
    },
    bgImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 20,
        fontSize: 36,
        fontFamily: 'yellowtail-regular',
        textAlign: 'center',
    },
    indicator: {
        marginTop: 50,
    },
});
