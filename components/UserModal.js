import React, { useState } from 'react';
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';

export default function UserModal(props) {
    console.log(props)
    const setModalVisible = props.toggleFunction

    return (

        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Sebastian Richter</Text>
                <Text style={styles.modalText}>@gismo1337</Text>
                <Text style={styles.modalText}>_________________</Text>
                <Text style={styles.modalText}>Dashboard</Text>
                <Text style={styles.modalText}>Create Post</Text>
                <Text style={styles.modalText}>Reading list</Text>
                <Text style={styles.modalText}>Settings</Text>
                <Text style={styles.modalText}>_________________</Text>
                <Text style={styles.modalText}>Sign Out</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    centeredView: {
        alignItems: 'center',
        marginTop: 55,
    },
    modalView: {
        width: '95%',
        backgroundColor: '#161616',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#363636',
        padding: 5,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
    },
});