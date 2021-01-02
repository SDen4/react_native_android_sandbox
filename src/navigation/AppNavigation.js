import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ListScreen } from '../screens/ListScreen';

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Main" component={MainScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="List" component={ListScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
