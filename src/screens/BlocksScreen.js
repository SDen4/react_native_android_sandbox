import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppBlock } from '../components/AppBlock';

export const BlocksScreen = () => {
    return (
        <ScrollView>
            <View style={styles.wrapper}>
                <AppBlock style={styles.block1}>1 Block</AppBlock>
                <AppBlock style={styles.block2}>2 Block</AppBlock>
                <AppBlock style={styles.block3}>3 Block</AppBlock>
                <AppBlock style={styles.block4}>4 Block</AppBlock>
                <AppBlock style={styles.block5}>5 Block</AppBlock>
                <AppBlock style={styles.block6}>6 Block</AppBlock>
                <AppBlock style={styles.block7}>7 Block</AppBlock>
                <AppBlock style={styles.block8}>8 Block</AppBlock>
                <AppBlock style={styles.block1}>9 Block</AppBlock>
                <AppBlock style={styles.block2}>10 Block</AppBlock>
                <AppBlock style={styles.block3}>11 Block</AppBlock>
                <AppBlock style={styles.block4}>12 Block</AppBlock>
                <AppBlock style={styles.block5}>13 Block</AppBlock>
                <AppBlock style={styles.block6}>14 Block</AppBlock>
                <AppBlock style={styles.block7}>15 Block</AppBlock>
                <AppBlock style={styles.block8}>16 Block</AppBlock>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'steelblue',
    },
    block1: {
        backgroundColor: 'orange',
    },
    block2: {
        backgroundColor: 'blue',
    },
    block3: {
        backgroundColor: 'pink',
    },
    block4: {
        backgroundColor: 'green',
    },
    block5: {
        backgroundColor: 'brown',
    },
    block6: {
        backgroundColor: 'gray',
    },
    block7: {
        backgroundColor: 'yellow',
    },
    block8: {
        backgroundColor: 'red',
    },
});
