import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';


export default function Avatar() {

    return (
        <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
    );
}


const styles = StyleSheet.create({
    tinyLogo: {

        width: 30,
        height: 30,
        borderRadius: 25,

    },
});