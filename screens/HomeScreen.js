import React from 'react';
import FeedScrollView from '../components/FeedScrollView';
import TopBar from '../components/TopBar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

export default function HomeScreen({ feedData }, { navigation }) {


    return (
        <SafeAreaView style={styles.container}>
            <TopBar navigation={navigation} />
            <FeedScrollView feedData={feedData} navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    }
});