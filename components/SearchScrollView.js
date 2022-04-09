import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';
import SearchInput from '../components/SearchInput';
import SearchFilter from '../components/SearchFilter';

// HARDCODED DATAARRAY
const DATA = [
    {
        id: 1,
        imagePath: '',
        tag1: '#JavaScriupt',
        tag2: '#ReactNative',
        tag3: '#Tutorial',
        title: 'How to splice an Array in JavaScript?',
        author: 'Gismo1337',
        date: 'Apr 21',
        likes: 31,
        comments: 22,
        readTime: 5,
    },
    {
        id: 2,
        imagePath: '',
        tag1: '#Angular',
        tag2: '#Beginner',
        title: 'Top 10 Angular Beginner Tutorial of 2022',
        author: 'GremlinHate',
        date: 'Dez 20',
        likes: 41,
        comments: 62,
        readTime: 7,
    },
    {
        id: 3,
        imagePath: '',
        tag1: '#HTML',
        tag2: '#CSS',
        title: 'STEP 1: Learn HTML and CSS',
        author: 'Tutor',
        date: 'Nov 20',
        likes: 1,
        comments: 2,
        readTime: 17,
    },
    {
        id: 4,
        imagePath: '',
        tag1: '#dummy',
        tag2: '#dummy',
        title: 'STEP 2: Learn JavaScript',
        author: 'dummy',
        date: 'Feb 20',
        likes: 21,
        comments: 24,
        readTime: 4,
    },
    {
        id: 5,
        imagePath: '',
        tag1: '#dummy',
        tag2: '#dummy',
        title: 'STEP 3: Be Fullstack',
        author: 'dummy',
        date: 'Jan 20',
        likes: 0,
        comments: 0,
        readTime: 15,
    },
];

export default function SearchScrollView({ navigation }) {

    const renderItem = ({ item }) => (
        < Card data={item} navigation={navigation} />
    );

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <>
                    <SearchInput />
                    <SearchFilter />
                </>
            }
        />
    );
}