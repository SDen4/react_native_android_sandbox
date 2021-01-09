import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ListScreen } from '../screens/ListScreen';
import { AdditionScreen } from '../screens/AdditionScreen';
import { BlocksScreen } from '../screens/BlocksScreen';
import { THEME } from '../theme';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const stackOptions = {
    headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    headerLeftContainerStyle: {
        backgroundColor: THEME.BUTTONS_COLOR
    },
    headerPressColorAndroid: THEME.MAIN_COLOR,
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
            <Stack.Screen name='Blocks' component={BlocksScreen} />
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

const BlocksNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name='Blocks' component={BlocksScreen} options={optionsDrawer} />
        </Stack.Navigator>
    );
};

const DrawerNavigator = () => {
    const iconHome = <MaterialIcons name='home' size={24} color={THEME.MAIN_COLOR} />;
    const iconList = <MaterialIcons name='list' size={24} color={THEME.MAIN_COLOR} />;
    const iconInfo = <MaterialIcons name='info' size={24} color={THEME.MAIN_COLOR} />;
    const iconAdd = <MaterialIcons name='add-box' size={24} color={THEME.MAIN_COLOR} />;
    const iconBlocks = <MaterialIcons name='view-comfortable' size={24} color={THEME.MAIN_COLOR} />;

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
                options={{ drawerLabel: 'Главная', drawerIcon: () => iconHome }}
            />
            <Drawer.Screen
                name='List'
                component={ListNavigator}
                options={{ drawerLabel: 'Список', drawerIcon: () => iconList }}
            />
            <Drawer.Screen
                name='About'
                component={AboutNavigator}
                options={{ drawerLabel: 'О нас', drawerIcon: () => iconInfo }}
            />
            <Drawer.Screen
                name='Addition'
                component={AdditionNavigator}
                options={{ drawerLabel: 'Дополнительный', drawerIcon: () => iconAdd }}
            />
            <Drawer.Screen
                name='Blocks'
                component={BlocksNavigator}
                options={{ drawerLabel: 'Блоки', drawerIcon: () => iconBlocks }}
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
