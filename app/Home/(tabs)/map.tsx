import React, { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";

export default function Tab() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link href="../">
          <AntDesign name="left" size={24} color="black" />
        </Link>
        <Text style={styles.headerText}>Maps</Text>
        <Text />
      </View>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="black" />
        <TextInput
          placeholder="Search Location....."
          placeholderTextColor="#737373"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "btn1" ? styles.activeButton : styles.inactiveButton
          ]}
          onPress={() => handleButtonClick("btn1")}
        >
          <Text style={[
            styles.buttonText,
            activeButton === "btn1" ? styles.activeButtonText : styles.inactiveButtonText
          ]}>Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "btn2" ? styles.activeButton : styles.inactiveButton
          ]}
          onPress={() => handleButtonClick("btn2")}
        >
          <Text style={[
            styles.buttonText,
            activeButton === "btn2" ? styles.activeButtonText : styles.inactiveButtonText
          ]}>Apartment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "btn3" ? styles.activeButton : styles.inactiveButton
          ]}
          onPress={() => handleButtonClick("btn3")}
        >
          <Text style={[
            styles.buttonText,
            activeButton === "btn3" ? styles.activeButtonText : styles.inactiveButtonText
          ]}>Landed Properties</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '90%', height: '75%', margin: 'auto' }}>
        <MapView style={styles.map} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  inactiveButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#000",
  },
  activeButton: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "300",
  },
  inactiveButtonText: {
    color: "#000",
  },
  activeButtonText: {
    color: "#FFF",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
