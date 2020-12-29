import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ListScreen } from '../screens/ListScreen';


const Stack = createStackNavigator();

const screenParams = {
    options: {

    }
}

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={MainScreen} />
                <Stack.Screen name='About' component={AboutScreen} />
                <Stack.Screen name='List' component={ListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
