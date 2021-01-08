import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { AppNavigation } from './src/navigation/AppNavigation';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

async function loadFonts() {
    await Font.loadAsync({
        'goldman-bold': require('./assets/fonts/Goldman-Bold.ttf'),
        'goldman-regular': require('./assets/fonts/Goldman-Regular.ttf'),
        'yellowtail-regular': require('./assets/fonts/Yellowtail-Regular.ttf'),
    });
}

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setIsReady(true)}
                onError={(err) => console.log(err)}
            />
        );
    }
    return <AppNavigation />;
}
