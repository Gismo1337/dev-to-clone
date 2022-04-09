import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

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