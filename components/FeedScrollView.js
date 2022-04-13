import React, { useState } from 'react';
import { FlatList } from 'react-native';
import FeedFilter from './FeedFilter';
import Card from './Card';
import __handleGetAllQualifications from '../services/database';
import { getData } from '../services/localStorage';

export default function FeedScrollView({ navigation }) {
    const [data, setData] = useState([])

    const renderItem = ({ item }) => (
        < Card data={item} navigation={navigation} />
    );

    // if data is empty, load data from local storage
    if (data.length === 0) {
        getPostsFromLocaleStorage()
    }

    // Load data from local storage
    async function getPostsFromLocaleStorage() {
        const postsDataArray = await getData()
        // Save data to state
        setData(postsDataArray)

    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<FeedFilter />}

        />
    );
}