import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CardDetailScreen from '../screens/CardDetailScreen';
import DrawerNavigator from './DrawerNavigator';
import UserProfileScreen from '../screens/UserProfileScreen';

const Stack = createNativeStackNavigator()




export default function Navigator(feedData) {
    // feedData IST HIER ANGEKOMMEN
    // console.log(feedData)


    const HomeScreenCarry = () => <HomeScreen {...feedData} />

    return (
        <Stack.Navigator
            // initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                animationEnabled: false
            }}>
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
                name='HomeScreen'
                component={props => <HomeScreenCarry {...props} />}
                options={{
                    headerShown: false,
                }
                }
            />
            <Stack.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{
                    headerShown: false,
                }
                }
            />
            <Stack.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={{
                    headerShown: false,
                }
                }
            />
            <Stack.Screen
                name='CardDetailScreen'
                component={CardDetailScreen}
                options={{
                    headerShown: false,
                }
                }
            />
            <Stack.Screen
                name='UserProfileScreen'
                component={UserProfileScreen}
                options={{
                    headerShown: false,
                }
                }
            />
        </Stack.Navigator>
    );
}