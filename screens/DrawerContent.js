import React from 'react';
import FeedScrollView from '../components/FeedScrollView';
import TopBar from '../components/TopBar';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

export default function DrawerContent({ navigation }) {
    console.log(navigation)
    return (
        <View>
            <Text>TEst</Text>
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