import React from 'react';
import { FlatList } from 'react-native';
import FeedFilter from './FeedFilter';
import Card from './Card';

// HARDCODED DATAARRAY
let DATA = [
    {
        id: 1,
        imagePath: 'https://images.unsplash.com/photo-1649325401644-41cd4627fa45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        tag1: '#JavaScriupt',
        tag2: '#ReactNative',
        tag3: '#Tutorial',
        title: 'How to splice an Array in JavaScript?',
        author: 'Gismo1337',
        date: 'Apr 21',
        likes: 31,
        comments: 22,
        readTime: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas assumenda optio ullam aliquam impedit, quam repudiandae eos eaque quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas assumenda optio ullam aliquam impedit, quam repudiandae eos eaque quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas assumenda optio ullam aliquam impedit, quam repudiandae eos eaque quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas assumenda optio ullam aliquam impedit, quam repudiandae eos eaque quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas assumenda optio ullam aliquam impedit, quam repudiandae eos eaque quasi? ',
    },
    {
        id: 2,
        imagePath: 'https://images.unsplash.com/photo-1649261813401-72e38bd5c793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
        tag1: '#Angular',
        tag2: '#Beginner',
        title: 'Top 10 Angular Beginner Tutorial of 2022',
        author: 'GremlinHate',
        date: 'Dez 20',
        likes: 41,
        comments: 62,
        readTime: 7,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas assumenda optio ullam aliquam impedit, quam repudiandae eos eaque quasi?',
    },
    {
        id: 3,
        imagePath: 'https://images.unsplash.com/photo-1649194270591-8eead57b94c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        tag1: '#HTML',
        tag2: '#CSS',
        title: 'STEP 1: Learn HTML and CSS',
        author: 'Tutor',
        date: 'Nov 20',
        likes: 1,
        comments: 2,
        readTime: 17,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas assumenda optio ullam aliquam impedit, quam repudiandae eos eaque quasi?',
    },
    {
        id: 4,
        imagePath: '',
        tag1: '#Angular',
        tag2: '#IDE',
        title: 'Topic without an image',
        author: 'Basti',
        date: 'Nov 22',
        likes: 0,
        comments: 0,
        readTime: 17,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas assumenda optio ullam aliquam impedit, quam repudiandae eos eaque quasi?',
    },
];

export default function FeedScrollView({ feedData }, { navigation }) {



    feedData.map(item => {
        DATA.push(item)
    })
    // DATA.push({ test })

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