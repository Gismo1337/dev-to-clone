import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import FeedFilter from './FeedFilter';
import Card from './Card';


const cardDataOne = [
    { imagePath: 'test' }
]
const cardDataTwo = [
    { imagePath: '' }
]

export default function FeedScrollView() {

    return (

        <ScrollView style={styles.container}>
            <FeedFilter />
            <Card data={cardDataOne} />
            <Card data={cardDataTwo} />
        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});