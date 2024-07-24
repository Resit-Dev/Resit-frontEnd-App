import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <Entypo name="home" size={focused ? 32 : 25} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <FontAwesome
                size={focused ? 32 : 25}
                name="map"
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="invest"
        options={{
          title: 'Invest',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <FontAwesome
                size={focused ? 32 : 25}
                name="dollar"
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <FontAwesome
                size={focused ? 32 : 25}
                name="envelope"
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : null}>
              <FontAwesome
                size={focused ? 32 : 25}
                name="list"
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black',
    height: 60,
    paddingBottom: 10,
    paddingTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 18,
  },
  tabBarLabel: {
    fontSize: 12,
  },
  activeTab: {
    backgroundColor: '#00008B',
    padding: 10,
    borderRadius: 50,
    marginTop: -20,
  },
});
