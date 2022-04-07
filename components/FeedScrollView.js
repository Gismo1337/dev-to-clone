import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import FeedFilter from './FeedFilter';
import Card from './Card';


const cardDataOne = {
    imagePath: 'https://images.unsplash.com/photo-1649325401644-41cd4627fa45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tag1: '#JavaScriupt',
    tag2: '#ReactNative',
    tag3: '#Tutorial',
    title: 'How to splice an Array in JavaScript?',
    author: 'Gismo1337',
    date: 'Apr 21',
    likes: 31,
    comments: 22,
    readTime: 5,
}

const cardDataTwo = {
    imagePath: 'https://images.unsplash.com/photo-1649261813401-72e38bd5c793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    tag1: '#Angular',
    tag2: '#Beginner',
    title: 'Top 10 Angular Beginner Tutorial of 2022',
    author: 'GremlinHate',
    date: 'Dez 20',
    likes: 41,
    comments: 62,
    readTime: 7,
}

export default function FeedScrollView() {

    return (

        <ScrollView style={styles.container}>
            <FeedFilter />
            <Card data={cardDataOne} />
            <Card data={cardDataTwo} />
            <Card data={cardDataOne} />
            <Card data={cardDataTwo} />
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