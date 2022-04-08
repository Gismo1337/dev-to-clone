import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createNativeStackNavigator()

export default function Navigator() {
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                animationEnabled: false
            }}>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
            <Stack.Screen
                name='SearchScreen'
                component={SearchScreen}
            />
            <Stack.Screen
                name='NotificationScreen'
                component={NotificationScreen}
            />
        </Stack.Navigator>
    );
}