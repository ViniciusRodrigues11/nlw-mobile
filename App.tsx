import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Routes from './src/routes'

export default function App() {

  const [theme, setTheme] = useState('light')

  function handleEditTheme() {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }
  return (
    <>
      <StatusBar hidden />
      <Routes theme={theme} />
      <View style={styles.editTheme}  >
        <Feather
          onPress={handleEditTheme}
          name={theme == 'light' ? 'moon' : 'sun'}
          color={theme == 'light' ? '#666' : '#fff'}
          size={20}
          width={50}
          height={50}
        >
        </Feather>
      </View>
    </>
  );
}



const styles = StyleSheet.create({

  editTheme: {
    position: 'absolute',
    top: 10,
    right: 10
  },

})