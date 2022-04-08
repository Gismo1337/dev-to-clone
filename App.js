import React, { useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationScreen from './screens/NotificationScreen';

export default function App() {
  const [loading, setLoading] = React.useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 750);

  }, [])


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <FontAwesome5 name="dev" size={96} color="white" />
      </View>
    )
  }
  else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#000"
        />
        {/* <HomeScreen /> */}
        {/* <SearchScreen /> */}
        <NotificationScreen />
      </SafeAreaView>
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
