import React from 'react'

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'

import { SignIn } from '@screens/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <SignIn></SignIn>
    </ThemeProvider>
  )
}
