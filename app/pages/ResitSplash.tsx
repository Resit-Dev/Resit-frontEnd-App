import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const FirstPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/R.png')}/>
        <Text style={styles.headerText}>RESIT</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Welcome To Resit</Text>
        <Text style={styles.descriptionText}>Get Ready to Experience our Real Estate firm with our User-Friendly platform</Text>
      </View>
      <View style={[styles.btnContainer, { bottom:100, justifyContent: "center"}]}>
          <Image source={require('../../assets/images/Group1.png')}/>
      </View>
      <View style={styles.btnContainer}>
        <Link href='../(auth)/SiginIn/page' style={[styles.linkText, {backgroundColor: 'none', borderColor: "#0F315E", borderWidth:1, color:"#0F315E",}]}>Skip</Link>
        <Link href='../pages/OnBoardingOne'style={styles.linkText}>Next</Link>
      </View>
    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 10,
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
    bottom: 30, 
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
