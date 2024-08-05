import { Stack } from 'expo-router/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';

export default function Layout() {
  const [initialState, setInitialState] = React.useState();
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const loadState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem('NAVIGATION_STATE');
        const state = savedStateString ? JSON.parse(savedStateString) : undefined;
        if (state) {
          setInitialState(state);
        }
      } catch (e) {
        console.error('Failed to load navigation state', e);
      } finally {
        setIsReady(true);
      }
    };

    loadState();
  }, []);

  const onStateChange = async (state) => {
    try {
      const stateString = JSON.stringify(state);
      await AsyncStorage.setItem('NAVIGATION_STATE', stateString);
    } catch (e) {
      console.error('Failed to save navigation state', e);
    }
  };

  if (!isReady) {
    return null; // Or a loading spinner
  }

  return (
      <Stack  initialState={initialState} onStateChange={onStateChange}  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

  );
}
