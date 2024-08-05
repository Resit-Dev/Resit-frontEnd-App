import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

const page = () => {
  const ForgetOptions = [
    { label: "Via Email", value: 0 },
    { label: "Via Phone Number", value: 1 },
  ];

  const [forgotValue, setForgotValue] = useState(0);

  const getNavigationHref = () => {
    if (forgotValue === 0) {
      return "./ResetWithEmail/page";
    } else if (forgotValue === 1) {
      return "./ResetWithNumber/page";
    }
    return "#";
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" , paddingTop: 30}}>
      <StatusBar />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 150,
        }}
      >
        <View>
          <Text style={{ color: "#0F315E", fontSize: 20, fontWeight: "600", textAlign: 'center' }}>
            Forget Password
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15, marginHorizontal:30, textAlign: "center" }}>
            Select which method we should use to reset your password
          </Text>
        </View>
      </View>
      <View style={styles.radioContainer}>
        {ForgetOptions.map((option, index) => (
          <View key={index} style={styles.radioButtonContainer}>
            <Pressable
              style={[
                styles.radioButton,
                forgotValue === option.value && styles.radioButtonSelected,
              ]}
              onPress={() => setForgotValue(option.value)}
            />
            <Text style={styles.radioLabel}>{option.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
          <Pressable style={styles.continueButton}>
        <Link href={getNavigationHref()} style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
              Continue
        </Link>
          </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default page;

const styles = StyleSheet.create({
  radioContainer: {
    margin: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'white',
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: 'grey',
  },
  radioLabel: {
    fontSize: 16,
    color: '#404040',
    fontWeight: '500',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  continueButton: {
    backgroundColor: "#0F315E",
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  }
});
