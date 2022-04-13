import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './routes/DrawerNavigator';
import __handleGetAllQualifications from './services/database';
import { storeData } from './services/localStorage';



import { LogBox } from 'react-native';
// See https://github.com/facebook/react-native/issues/12981 for more info
LogBox.ignoreLogs(['Setting a timer for a long period of time']);

export default function App() {
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    const postsDataFromFirebase = await __handleGetAllQualifications('posts')
    // Store data in local storage
    await storeData(postsDataFromFirebase)
    setLoading(false)
  }

  if (loading) {
    // Load Posts from Firebase Database
    getPosts()

    // Show ICON while downloading Data
    return (
      <View style={styles.loadingContainer}>
        <FontAwesome5 name="dev" size={96} color="white" />
      </View>
    )
  }

  else {
    return (
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#000"
        />

        <DrawerNavigator />
      </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});