import React from 'react';
import FeedScrollView from '../components/FeedScrollView';
import TopBar from '../components/TopBar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <TopBar />
            <FeedScrollView />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});