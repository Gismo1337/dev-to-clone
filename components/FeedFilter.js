import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default function FeedFilter() {

    return (
        <View style={styles.container}>
            <View style={styles.feedViewContainer}>

                <Text style={styles.feedTitleActive}>Relevant</Text>
                <Text style={styles.feedTitle}>Latest</Text>
                <Text style={styles.feedTitle}>Top</Text>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    feedViewContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    feedTitle: {
        color: 'lightgray',
        paddingLeft: 15,
    },
    feedTitleActive: {
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 15,
    },
});