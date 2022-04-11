import React from 'react';
import FeedScrollView from '../components/FeedScrollView';
import TopBar from '../components/TopBar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native';
import Avatar from '../components/Avatar';

export default function UserProfileScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <TopBar navigation={navigation} />
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatarImage}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>
            <View style={styles.profileCardContainer}>

                <View style={styles.editButtonContainer}>
                    <Button
                        onPress={() => console.log('EDIT PROFILE')}
                        title="Edit profile"
                        color="#4A36CD"
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.userFirstname}>Sebastian</Text>
                    <Text style={styles.userBio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos laudantium recusandae fugiat dolorem voluptate iure obcaecati dolor molestiae soluta.</Text>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%'
    },
    avatarContainer: {
        position: 'absolute',
        zIndex: 1000,
        top: 65,
        left: 15,
    },
    avatarImage: {
        borderWidth: 4,
        borderColor: '#000',
        width: 60,
        height: 60,
        borderRadius: 30,


    },
    profileCardContainer: {
        backgroundColor: '#161616',
        marginTop: 42.5,
        width: '100%',
    },
    editButtonContainer: {
        alignItems: 'flex-end',
        width: '100%',
        marginTop: 15,
        paddingRight: 15,
    },

    textContainer: {
        marginTop: 10,
        marginLeft: 15,
    },
    userFirstname: {
        color: 'white',
        fontSize: 24,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    userBio: {
        color: 'lightgray',
        fontSize: 16,
        paddingBottom: 10,
        lineHeight: 25,

    },

});