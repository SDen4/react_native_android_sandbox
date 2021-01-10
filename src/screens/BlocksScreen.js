import React from 'react';
import { FlatList } from 'react-native';
import { AppBlock } from '../components/AppBlock';
import data from '../data';

export const BlocksScreen = () => {
    return (
        <FlatList
            keyExtractor={(data) => data.id.toString()}
            data={data}
            numColumns='2'
            renderItem={({ item }) => {
                return <AppBlock style={item.style}>{item.title}</AppBlock>;
            }}
        />
    );
};
