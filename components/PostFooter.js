import React from 'react';
import TopBar from '../components/TopBar';
import { Image, Text, StyleSheet, View } from 'react-native';

import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Avatar from '../components/Avatar';


export default function PostFooter(props) {

    const { imagePath, author, date, title, tag1, tag2, tag3, likes, comments, readTime, text } = props.data;

    return (
        <View style={styles.postFooterContainer}>
            <View style={styles.postFooterLeftContainer}>

                <View style={styles.postFavContainer}>
                    <Feather name="heart" size={24} color="white" />
                    {likes > 0 && <Text style={styles.favCount}>{likes}</Text>}
                </View>

                <View style={styles.postCommentContainer}>
                    <FontAwesome5 name="comment" size={24} color="white" />
                    {comments > 0 && <Text style={styles.commentCount}>{comments}</Text>}
                </View>

            </View>

            <View style={styles.postFooterRightContainer}>
                <View><Text style={styles.timeOfRead}>{readTime} min read</Text></View>
                <View style={styles.timeOfReadBtn}><Text style={styles.saveButton}>Save</Text></View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: '100%',
        height: '100%',

    },
    text: {
        color: 'white',
        width: '100%',
    },
    cardImage: {
        marginTop: 2,
        width: '100%',
        height: 160,
    },
    postDetailContainer: {
        marginTop: 2,
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 15,
        backgroundColor: '#161616',
    },
    postDetailTop: {
        flexDirection: 'row',
    },
    postDetailInfo: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    postAuthor: {
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 15,
    },
    postDate: {
        fontSize: 12,
        color: 'lightgray',
        paddingLeft: 15,
    },
    postTitle: {
        color: 'white',
        fontSize: 24,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    postTag: {
        color: 'lightgray',
        fontSize: 12,
        paddingRight: 15,
    },
    postText: {
        color: 'lightgray',
        fontSize: 16,
        lineHeight: 32,
        paddingRight: 15,
        fontFamily: 'monospace'
    },
    postTagsContainer: {
        flexDirection: 'row',
        paddingBottom: 25,
        marginLeft: 10,
    },
    postTextContainer: {
        flexDirection: 'row',
        paddingBottom: 25,

    },
    postFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postFavContainer: {
        marginRight: 25,
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    postCommentContainer: {
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postFooterLeftContainer: {
        alignItems: 'center',
        flexDirection: 'row',

    },
    postFooterRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    favIcon: {
        color: 'white',
    },
    favCount: {
        color: 'white',
        paddingLeft: 5,
    },
    commentCount: {
        color: 'white',
        paddingLeft: 5,
    },
    timeOfRead: {
        color: 'lightgray',
        fontSize: 12,

    },
    saveButton: {
        textAlign: 'center',
        width: 55,
        height: 35,
        backgroundColor: '#363636',
        borderRadius: 5,
        color: 'white',
        textAlignVertical: 'center',
    },
    timeOfReadBtn: {
        marginHorizontal: 15,
        alignContent: 'center',

    },
});