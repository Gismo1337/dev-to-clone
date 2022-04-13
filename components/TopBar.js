import React, { useState } from 'react';
import { Pressable, Text, Modal, Image, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import Avatar from './Avatar';
import UserModal from './UserModal';

export default function TopBar({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute();
    const [isActive, setIsActive] = useState(route.name);

    let activeRoute = isActive

    return (
        <View style={styles.container}>

            <View style={styles.iconViewContainer}>
                <View style={styles.iconLeftViewContainer}>
                    <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
                        <Feather name="menu" size={24} color="white" />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={styles.logo} source={require('../assets/logoIcon.png')} />
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.iconRightViewContainer}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('SearchScreen')}>
                        <View style={[styles.inActive, activeRoute === 'SearchScreen' && styles.active]}>
                            <FontAwesome5 name="search" size={24} color="white" />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('NotificationScreen')}>
                        <View style={[styles.inActive, activeRoute === 'NotificationScreen' && styles.active]}>
                            <FontAwesome5 name="bell" size={24} color="white" />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.inActive}>
                            <Avatar />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }}>

                    <UserModal toggleFunction={setModalVisible} navigation={navigation} />

                </Modal>
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
    test: { color: 'white' },
    testContainer: { width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' },
    logo: {
        height: 40,
        width: 50,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#A78BFA',
        height: 40,
        width: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inActive: {
        height: 40,
        width: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
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