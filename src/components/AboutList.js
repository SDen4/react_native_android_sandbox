import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export const AboutList = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.viewContainer}>
                <Text style={styles.viewText}>
                    Test text view 1 Test text view 1 Test text view 1 Test text view 1 Test text
                    view 1 Test text view 1
                </Text>
                <Text>
                    Test text view 1.1 Test text view 1.1 Test text view 1.1 Test text view 1.1 Test
                    text view 1.1 Test text view 1.1 Test text view 1.1 Test text view 1.1 Test text
                    view 1.1 Test text view 1.1
                </Text>
            </View>
            <View style={styles.viewContainer}>
                <Text style={styles.viewText}>
                    Test text view 2 Test text view 2 Test text view 2 Test text view 2 Test text
                    view 2 Test text view 2 Test text view 2 Test text view 2 Test text view 2
                </Text>
                <Image source={require('../../assets/googlepic.jpg')} style={styles.img} />
            </View>
            <View style={styles.viewContainer}>
                <Image
                    source={{
                        uri:
                            'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
                    }}
                    style={styles.img}
                />
                <Text style={styles.viewText}>
                    Test text view 3 Test text view 3 Test text view 3 Test text view 3 Test text
                    view 3
                </Text>
            </View>
            <View style={styles.viewContainer}>
                <Text style={styles.viewText}>
                    Test text view 1 Test text view 1 Test text view 1 Test text view 1 Test text
                    view 1 Test text view 1
                </Text>
                <Text>
                    Test text view 1.1 Test text view 1.1 Test text view 1.1 Test text view 1.1 Test
                    text view 1.1 Test text view 1.1 Test text view 1.1 Test text view 1.1 Test text
                    view 1.1 Test text view 1.1
                </Text>
            </View>
            <View style={styles.viewContainer}>
                <Text style={styles.viewText}>
                    Test text view 2 Test text view 2 Test text view 2 Test text view 2 Test text
                    view 2 Test text view 2 Test text view 2 Test text view 2 Test text view 2
                </Text>
                <Image source={require('../../assets/googlepic.jpg')} style={styles.img} />
            </View>
            <View style={styles.viewContainer}>
                <Image
                    source={{
                        uri:
                            'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
                    }}
                    style={styles.img}
                />
                <Text style={styles.viewText}>
                    Test text view 3 Test text view 3 Test text view 3 Test text view 3 Test text
                    view 3
                </Text>
            </View>
            <View style={styles.viewContainer}>
                <Text style={styles.viewText}>
                    Test text view 1 Test text view 1 Test text view 1 Test text view 1 Test text
                    view 1 Test text view 1
                </Text>
                <Text>
                    Test text view 1.1 Test text view 1.1 Test text view 1.1 Test text view 1.1 Test
                    text view 1.1 Test text view 1.1 Test text view 1.1 Test text view 1.1 Test text
                    view 1.1 Test text view 1.1
                </Text>
            </View>
            <View style={styles.viewContainer}>
                <Text style={styles.viewText}>
                    Test text view 2 Test text view 2 Test text view 2 Test text view 2 Test text
                    view 2 Test text view 2 Test text view 2 Test text view 2 Test text view 2
                </Text>
                <Image source={require('../../assets/googlepic.jpg')} style={styles.img} />
            </View>
            <View style={styles.viewContainer}>
                <Image
                    source={{
                        uri:
                            'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
                    }}
                    style={styles.img}
                />
                <Text style={styles.viewText}>
                    Test text view 3 Test text view 3 Test text view 3 Test text view 3 Test text
                    view 3
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    viewText: {
        width: '49%',
    },
    img: {
        width: '49%',
        height: 100,
    },
});
