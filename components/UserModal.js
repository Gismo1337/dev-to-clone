import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Text, Pressable, StyleSheet } from 'react-native';

export default function UserModal(props) {

    const navigation = props.navigation;
    const setModalVisible = props.toggleFunction

    return (
        <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
            <View style={styles.Container}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Pressable onPress={() => navigation.navigate('UserProfileScreen')} >
                            <Text style={styles.userNameText}>Sebastian Richter</Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate('UserProfileScreen')} >
                            <Text style={styles.userNicknameText}>@gismo1337</Text>
                        </Pressable>

                        <View style={styles.divider} />

                        <Text style={styles.modalText}>Dashboard</Text>
                        <Text style={styles.modalText}>Create Post</Text>
                        <Text style={styles.modalText}>Reading list</Text>
                        <Text style={styles.modalText}>Settings</Text>
                        <View style={styles.divider} />
                        <Text style={styles.modalText}>Sign Out</Text>
                        {/* FIXME: For Development only */}
                        {/* <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}>
                            <Text style={styles.textStyle}>close - for develop only</Text>
                        </Pressable> */}
                    </View>
                </View >
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
    },
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
        paddingLeft: 15,
    },
    userNicknameText: {
        color: '#9C9C9C',
        marginBottom: 15,
        textAlign: 'center',
        paddingLeft: 15,
    },
    userNameText: {
        color: 'lightgray',
        textAlign: 'center',
        paddingLeft: 15,
    },
    divider: {
        borderBottomColor: '#363636',
        borderBottomWidth: 1,
        width: '100%',
        marginBottom: 20,
    }
});