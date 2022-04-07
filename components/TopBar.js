import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';

import Avatar from './Avatar';

export default function TopBar() {

    return (
        <View style={styles.container}>
            <View style={styles.iconViewContainer}>

                <View style={styles.iconLeftViewContainer}>
                    <Feather name="menu" size={24} color="white" />

                    <FontAwesome5 name="dev" size={40} color="black" />

                </View>

                <View style={styles.iconRightViewContainer}>
                    <FontAwesome5 name="search" size={24} color="white" />
                    <FontAwesome5 name="bell" size={24} color="white" />
                    <Avatar />
                </View>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#161616',
        justifyContent: 'center',
    },
    iconViewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    iconLeftViewContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 85,
        paddingLeft: 10,
    },
    iconRightViewContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 130,
        paddingRight: 5,
    },
});