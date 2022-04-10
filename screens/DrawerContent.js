import React from 'react';
import FeedScrollView from '../components/FeedScrollView';
import TopBar from '../components/TopBar';
import { TouchableWithoutFeedback, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function DrawerContent({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={styles.titleTextContainer}>

                <Text style={styles.titleText}>DEV Community</Text>
                <View style={styles.closeButton} >
                    <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
                        <AntDesign name="close" size={20} color="lightgray" />
                    </TouchableWithoutFeedback>
                </View>
            </View>

            {/* TODO: NAVITEM COMPONENT (DRY) */}


            <TouchableWithoutFeedback onPress={() => navigation.navigate('HomeScreen')}>
                <View style={styles.navItemContainer} >
                    <Text style={styles.itemIcon}>🏠</Text>
                    <Text style={styles.itemText}>Home</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>🗃️</Text>
                    <Text style={styles.itemText}>Reading List</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>📜</Text>
                    <Text style={styles.itemText}>Listings</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>🎙️</Text>
                    <Text style={styles.itemText}>Podcast</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>📽️</Text>
                    <Text style={styles.itemText}>Videos</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>🏷️</Text>
                    <Text style={styles.itemText}>Tags</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>💡</Text>
                    <Text style={styles.itemText}>FAQ</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>🛍️</Text>
                    <Text style={styles.itemText}>Forem Shop</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>💜</Text>
                    <Text style={styles.itemText}>Sponsors</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>✨</Text>
                    <Text style={styles.itemText}>About</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>📯</Text>
                    <Text style={styles.itemText}>Contact</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.subtitleText}>Other</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>👍</Text>
                    <Text style={styles.itemText}>Code of Conduct</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>🤓</Text>
                    <Text style={styles.itemText}>Privacy Policy</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                <View style={styles.navItemContainer}>
                    <Text style={styles.itemIcon}>👀</Text>
                    <Text style={styles.itemText}>Terms of use</Text>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.socialIconContainer}>



                <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                    <Text style={styles.socialIcon}>
                        <AntDesign name="twitter" size={24} color="lightgray" />
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                    <Text style={styles.socialIcon}>
                        <AntDesign name="facebook-square" size={24} color="lightgray" />
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                    <Text style={styles.socialIcon}>
                        <AntDesign name="github" size={24} color="lightgray" />
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                    <Text style={styles.socialIcon}>
                        <AntDesign name="instagram" size={24} color="lightgray" />
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => alert('Not implemented yet')}>
                    <Text style={styles.socialIcon}>
                        <Feather name="twitch" size={24} color="lightgray" />
                    </Text>
                </TouchableWithoutFeedback>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#161616',
        width: '100%',
        height: '100%'
    },
    titleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 25,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 15,
    },
    closeButton: {
        color: 'lightgray',
        paddingRight: 25,
        fontSize: 24,
    },
    navItemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        paddingBottom: 18,
    },
    itemIcon: {
        fontSize: 16,
        paddingRight: 10,
        paddingLeft: 15,
    },
    itemText: {
        color: 'lightgray',
        fontSize: 16,
    },
    socialIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 25
    },
    socialIcon: { color: 'lightgray' },
    subtitleText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingTop: 15
    },
});