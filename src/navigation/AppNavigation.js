import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ListScreen } from '../screens/ListScreen';
import { AdditionScreen } from '../screens/AdditionScreen';
import { THEME } from '../theme';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const stackOptions = {
    headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    headerTintColor: '#fff',
};

const optionsDrawer = ({ navigation }) => ({
    headerRight: () => (
        <MaterialIcons.Button
            onPress={() => navigation.toggleDrawer()}
            name='menu'
            size={30}
            color='#fff'
            style={styles.drawer}
        ></MaterialIcons.Button>
    ),
});

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name='Main' component={MainScreen} options={optionsDrawer} />
            <Stack.Screen name='List' component={ListScreen} />
            <Stack.Screen name='About' component={AboutScreen} />
            <Stack.Screen name='Addition' component={AdditionScreen} />
        </Stack.Navigator>
    );
};

const ListNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name='List' component={ListScreen} options={optionsDrawer} />
        </Stack.Navigator>
    );
};

const AboutNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name='About' component={AboutScreen} options={optionsDrawer} />
        </Stack.Navigator>
    );
};

const AdditionNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name='Addition' component={AdditionScreen} options={optionsDrawer} />
        </Stack.Navigator>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: THEME.DRAWER_BG_COLOR,
                width: '55%',
            }}
            drawerContentOptions={{
                inactiveTintColor: THEME.MAIN_COLOR,
                activeTintColor: THEME.BUTTONS_COLOR,
                labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                    fontStyle: 'italic',
                },
            }}
            drawerPosition='right'
        >
            <Drawer.Screen
                name='Main'
                component={MainNavigator}
                options={{ drawerLabel: 'Главная' }}
            />
            <Drawer.Screen
                name='List'
                component={ListNavigator}
                options={{ drawerLabel: 'Список' }}
            />
            <Drawer.Screen
                name='About'
                component={AboutNavigator}
                options={{ drawerLabel: 'О нас' }}
            />
            <Drawer.Screen
                name='Addition'
                component={AdditionNavigator}
                options={{ drawerLabel: 'Дополнительный' }}
            />
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

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: THEME.MAIN_COLOR,
        paddingRight: 0,
    },
});
