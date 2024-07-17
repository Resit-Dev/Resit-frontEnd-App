import React from 'react'
import { Stack } from 'expo-router';


const PageLayout = () => {
  return (
    <Stack
    screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name="ResitSplash" />
  </Stack>
  )
}

export default PageLayout
