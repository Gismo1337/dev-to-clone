import React, { useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import Avatar from './Avatar';

export default function TopBar({ navigation }) {
    const route = useRoute();
    const [isActive, setIsActive] = useState(route.name);
    let activeRoute = isActive

    function onPressSearch() {
        navigation.navigate('SearchScreen')
    }

    function onPressNotifications() {
        navigation.navigate('NotificationScreen')
    }

    function onPressLogo() {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconViewContainer}>
                <View style={styles.iconLeftViewContainer}>
                    <Feather name="menu" size={24} color="white" />
                    <TouchableWithoutFeedback onPress={onPressLogo}>
                        <FontAwesome5 name="dev" size={40} color="black" />
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.iconRightViewContainer}>
                    <TouchableWithoutFeedback onPress={onPressSearch}>
                        <View style={[styles.inActive, activeRoute === 'SearchScreen' && styles.active]}>
                            <FontAwesome5 name="search" size={24} color="white" />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={onPressNotifications}>
                        <View style={[styles.inActive, activeRoute === 'NotificationScreen' && styles.active]}>
                            <FontAwesome5 name="bell" size={24} color="white" />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.inActive}>
                        <Avatar />
                    </View>
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
});