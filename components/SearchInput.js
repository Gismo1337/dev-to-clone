import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function SearchInput() {

    return (
        <View style={styles.container}>
            <Text style={styles.placeholderText}>Search...</Text>
            <FontAwesome5 name="search" size={24} color="white" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        height: 45,
        borderColor: '#363636',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeholderText: {
        color: '#363636',
    }
});