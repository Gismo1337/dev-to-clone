import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import Avatar from './Avatar';

export default function Card() {

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>


            <View style={styles.postDetailContainer}>

                <View>
                    <Avatar />
                </View>


                <View>

                    <View>
                        <View>
                            <Text style={styles.postDetailTitle}>title</Text>
                        </View>
                        <View>
                            <Text style={styles.postDetailDate}>sub</Text>
                        </View>
                    </View>

                </View>

            </View>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 3550,
        justifyContent: 'flex-start',
    },
    cardImage: {
        width: '100%',
        height: 180,
    },
    test: {
        width: '100%',
        height: 180,
    },
    postDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
    },
    postDetailTitle: {
        color: 'white',
        paddingLeft: 15,
    },
    postDetailDate: {
        color: 'lightgray',
        paddingLeft: 15,
    },
});