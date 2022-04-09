import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CardDetailScreen from '../screens/CardDetailScreen';
import TopBar from '../components/TopBar';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerTitle: (props) => <TopBar navigation={navigation} />,
                    headerStyle: {
                        backgroundColor: '#161616',
                    },
                    headerTintColor: '#fff',

                }
                }
            />
            <Drawer.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    headerTitle: (props) => <TopBar navigation={navigation} />,
                    headerStyle: {
                        backgroundColor: '#161616',
                    },
                    headerTintColor: '#fff',
                }
                }
            />
            <Drawer.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={{
                    headerTitle: (props) => <TopBar navigation={navigation} />,
                    headerStyle: {
                        backgroundColor: '#161616',
                    },
                    headerTintColor: '#fff',
                }
                }
            />
        </Drawer.Navigator>
    );
}