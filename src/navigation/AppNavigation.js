import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ListScreen } from '../screens/ListScreen';
import { THEME } from '../theme';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const stackOptions = {
    headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    headerTintColor: '#fff',
};

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen
                name='Main'
                component={MainScreen}
                options={{
                    headerLeft: () => (
                        <MaterialIcons.Button
                            onPress={() => Alert.alert('Test Button')}
                            name='menu'
                            size={30}
                            color='#fff'
                            style={styles.drawer}
                        ></MaterialIcons.Button>
                    ),
                }}
            />
            <Stack.Screen name='List' component={ListScreen} />
            <Stack.Screen name='About' component={AboutScreen} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: THEME.MAIN_COLOR,
        paddingRight: 0,
    },
});

const ListNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name='List' component={ListScreen} />
        </Stack.Navigator>
    );
};

const AboutNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name='About' component={AboutScreen} />
        </Stack.Navigator>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Main' component={MainNavigator} />
            <Drawer.Screen name='List' component={ListNavigator} />
            <Drawer.Screen name='About' component={AboutNavigator} />
        </Drawer.Navigator>
    );
};

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};
