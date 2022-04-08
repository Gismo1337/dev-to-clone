import React from 'react';
import FeedScrollView from '../components/FeedScrollView';
import TopBar from '../components/TopBar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

import SearchScrollView from '../components/SearchScrollView';

export default function SearchScreen() {

    return (
        <View style={styles.container}>
            <TopBar />
            <SearchScrollView />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});