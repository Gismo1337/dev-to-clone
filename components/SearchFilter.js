import React, { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';

export default function SearchFilter() {

    return (
        <>
            <View style={styles.searchViewContainer}>
                <Text style={styles.titleActive}>Most Relevant</Text>
                <Text style={styles.title}>Newest</Text>
                <Text style={styles.title}>Oldest</Text>
            </View>

            <ScrollView
                contentContainerStyle={styles.searchViewContainer}
                horizontal
            >

                <Text style={styles.titleActive}>Posts</Text>
                <Text style={styles.title}>Podcasts</Text>
                <Text style={styles.title}>People</Text>
                <Text style={styles.title}>Tags</Text>
                <Text style={styles.title}>Comments</Text>
                <Text style={styles.title}>My posts only</Text>

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    searchViewContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 25,

    },
    title: {
        color: 'lightgray',
        paddingLeft: 15,
    },
    titleActive: {
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 15,
    },
});