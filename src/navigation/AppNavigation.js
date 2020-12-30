import React from 'react';
import { Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ListScreen } from '../screens/ListScreen';
import { THEME } from '../theme';

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                        headerRight: () => (
                            <Button
                                title="test button"
                                onPress={() => Alert.alert('Test Button')}
                                color={THEME.DANGER_COLOR}
                            />
                        ),
                    }}
                />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="List" component={ListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
