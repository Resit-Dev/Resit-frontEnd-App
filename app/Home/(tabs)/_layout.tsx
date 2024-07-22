import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
      }}
    >
    
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={focused ? 32 : 28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={focused ? 32 : 28} 
              name="map"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="invest"
        options={{
          title: 'Invest',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={focused ? 32 : 28} 
              name="dollar" 
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={focused ? 32 : 28} 
              name="envelope" 
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={focused ? 32 : 28} 
              name="list"
              color={color}
            />
          ),
        }}
      />
      
    </Tabs>
  );
}
