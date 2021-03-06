import React from 'react';
import TopBar from '../components/TopBar';
import { StyleSheet, Text, View } from 'react-native';
import NotificationCard from '../components/NotificationCard';

export default function NotificationScreen({ navigation }) {

    return (
        <View style={styles.container}>

            <TopBar navigation={navigation} />

            <View style={styles.topTextContainer}>

                <Text style={styles.title}>Notification</Text>
                <Text style={styles.text}>Settings</Text>

            </View>

            <View style={styles.catTextContainer}>

                <Text style={styles.textActive}>All</Text>
                <Text style={styles.text}>Comments</Text>
                <Text style={styles.text}>Posts</Text>

            </View>
            {/* TODO: HARDCODED */}
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    },
    topTextContainer: {
        width: '100%',
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    catTextContainer: {
        width: '100%',
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 15,
    },
    text: {
        color: 'white',
        paddingRight: 25,
    },
    textActive: {
        fontWeight: 'bold',
        color: 'white',
        paddingRight: 25,
    },
});