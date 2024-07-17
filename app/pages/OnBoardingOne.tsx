import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SecondPage = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titleText}>We’re  exicted to have your on board</Text>
            <Text style={{textAlign: "center"}}>Use our search features to discover available</Text>
            <Text style={{textAlign: "center"}}>properties that match your preference</Text>
        </View>
        <View>
            <Image source={require('../../assets/images/second-image.png')}/>
        </View>
        <View style={[styles.btnContainer, { bottom:100, justifyContent: "center"}]}>
          <Image source={require('../../assets/images/Group2.png')}/>
      </View>
        <View style={styles.btnContainer}>
          <Link href=''  style={[styles.linkText, {backgroundColor: 'none', borderColor: "#0F315E", borderWidth:1, color:"#0F315E",}]}>Skip</Link>
          <Link href='./OnBoardingTwo' style={styles.linkText}>Next</Link>
        </View>
    </View>
  )
}

export default SecondPage

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
    paddingTop: 50,
    paddingBottom: 10,
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