import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CardDetailScreen from '../screens/CardDetailScreen';
import DrawerNavigator from './DrawerNavigator';
import TopBar from '../components/TopBar';
const Stack = createNativeStackNavigator()

export default function Navigator({ navigation }) {
    return (
        <Stack.Navigator
            // initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: true,
                animationEnabled: false
            }}>
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
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
            <Stack.Screen
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
            <Stack.Screen
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
            <Stack.Screen
                name='CardDetailScreen'
                component={CardDetailScreen}
                options={{
                    headerTitle: (props) => <TopBar navigation={navigation} />,
                    headerStyle: {
                        backgroundColor: '#161616',
                    },
                    headerTintColor: '#fff',

                }
                }
            />
        </Stack.Navigator>
    );
}