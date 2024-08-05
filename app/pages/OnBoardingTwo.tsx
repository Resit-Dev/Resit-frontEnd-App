import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ThirdPage = () => {
  return (
    <View> 
        <View>
            <Image style={{width: '90%', height: '80%'}} source={require('../../assets/images/thired.png')} />
        </View>
        <View>
            <Text style={styles.titleText}>Congratulations</Text>
            <Text style={styles.descriptionText}>Owning a home is a keystone of wealth for both</Text>
            <Text style={styles.descriptionText}>financial affluence and emotional security</Text>
        </View>
        <View style={[styles.btnContainer, { bottom:10, justifyContent: "center"}]}>
          <Image source={require('../../assets/images/Group3.png')}/>
      </View>
        <View style={styles.btnContainer}>
        <Link href='../(auth)/SiginIn/page'></Link>
        <Link href="../(auth)/SiginIn/page" style={styles.linkText}>Get Started</Link>
      </View>
    </View>
  )
}

export default ThirdPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 10,
    textAlign: "center"
  },
  descriptionText: {
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    paddingHorizontal: 20,
    position: "absolute",
    bottom: -60, 
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#0F315E',
    color: '#FFFFFF',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 6,
  }
})