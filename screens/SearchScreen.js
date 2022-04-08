import React from 'react';
import FeedScrollView from '../components/FeedScrollView';
import TopBar from '../components/TopBar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

import SearchScrollView from '../components/SearchScrollView';

export default function SearchScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <TopBar navigation={navigation} />
            <SearchScrollView />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    }
});