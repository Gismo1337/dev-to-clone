import React from 'react';
import { FlatList } from 'react-native';
import FeedFilter from './FeedFilter';
import Card from './Card';

// TODO: Delete on live: For a random Avatar
let i = 0;

let DATA = []

export default function FeedScrollView({ feedData }, { navigation }) {

    feedData.map(item => {
        // TODO: Delete on live: For a random Avatar
        i = i + 1
        const avatar = `${'https://picsum.photos/200/300?random=' + i}`

        DATA.push({
            ...item,
            // TODO: DELETE HARDCODED on live
            date: 'Nov 22',
            imagePath: avatar,
            tag1: '#Angular',
            tag2: '#IDE',
        })
    })

    const renderItem = ({ item }) => (
        < Card data={item} navigation={navigation} />
    );

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<FeedFilter />}
        />
    );
}