import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './routes/DrawerNavigator';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [feedData, setFeedData] = useState({});

  _getFeedData = async () => {
    try {
      const response = await fetch('https://github.com/Gismo1337/dev-to-clone/.mockend.json')
        .then(response => response.json())
      setFeedData(response)
      setLoading(false)
    } catch (error) {
      console.log('Error on fetching data: ', error)
    }


  };


  // Hardcoded Apploadungtime
  useEffect(() => {
    _getFeedData()
  }, [])

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <FontAwesome5 name="dev" size={96} color="#fff" />
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
        <DrawerNavigator feedData={feedData} />
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