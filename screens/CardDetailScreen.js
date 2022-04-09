import React from 'react';
import TopBar from '../components/TopBar';
import { Image, Text, StyleSheet, View } from 'react-native';
import SearchScrollView from '../components/SearchScrollView';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Avatar from '../components/Avatar';


export default function CardDetailScreen(props) {

    const { imagePath, author, date, title, tag1, tag2, tag3, likes, comments, readTime, text } = props.route.params;
    return (
        <View style={styles.container}>
            <TopBar navigation={props.navigation} />

            {imagePath !== '' && <View>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: imagePath,
                    }}
                />
            </View>}

            <View style={styles.postDetailContainer}>
                <View style={styles.postDetailTop}>

                    <View>
                        <Avatar />
                    </View>

                    <View style={styles.postDetailInfo}>
                        <Text style={styles.postAuthor}>{author}</Text>
                        <Text style={styles.postDate}>{date} (1 day ago)</Text>
                    </View>

                </View>

                <View>
                    <Text style={styles.postTitle}>{title}</Text>
                </View>

                <View style={styles.postTagsContainer}>
                    {/* FIXME: ITERATE TAG ARRAY */}
                    <Text style={styles.postTag}>{tag1}</Text>
                    <Text style={styles.postTag}>{tag2}</Text>
                    <Text style={styles.postTag}>{tag3}</Text>
                </View>

                <View style={styles.postTextContainer}>
                    <Text style={styles.postText}>{text}</Text>
                </View>


            </View>

        </View >
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