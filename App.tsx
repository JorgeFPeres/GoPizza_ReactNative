import React from 'react'
import { Text, View } from 'react-native'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View>
      <Text>Loading</Text>
    </View>
  )
}
