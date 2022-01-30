import React from 'react'

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { AuthProvider } from '@hooks/auth'
import theme from './src/theme'
import { Text } from 'react-native'

import { SignIn } from '@screens/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  })

  if (!fontsLoaded) {
    return <Text>Loading</Text>
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </ThemeProvider>
  )
}
