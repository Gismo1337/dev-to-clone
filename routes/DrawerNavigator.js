import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CardDetailScreen from '../screens/CardDetailScreen';
import DrawerContent from '../screens/DrawerContent';
import UserProfileScreen from '../screens/UserProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ feedData }, { navigation }) {

    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
                name='HomeScreen'
                component={props => <HomeScreen {...props} feedData={feedData} />}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Drawer.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Drawer.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Drawer.Screen
                name='CardDetailScreen'
                component={CardDetailScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Drawer.Screen
                name='DrawerContent'
                component={DrawerContent}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Drawer.Screen
                name='UserProfileScreen'
                component={UserProfileScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
        </Drawer.Navigator>
    );
}