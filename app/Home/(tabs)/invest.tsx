import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const invest = () => {
  return (
    <SafeAreaView>
        <View style={styles.header}>
        <Link href="../">
          <AntDesign name="left" size={24} color="black" />
        </Link>
        <Text style={styles.headerText}>Investment</Text>
        <MaterialCommunityIcons name="tune" size={24} color="black" />
      </View>
    </SafeAreaView>
  )
}

export default invest

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
})