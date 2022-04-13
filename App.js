import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './routes/DrawerNavigator';
import app from './services/database';

export default function App() {
  const [loading, setLoading] = useState(false);

  // Hardcoded Apploadungtime
  useEffect(() => {

    // setLoading(false)

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