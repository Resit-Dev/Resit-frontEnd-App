import { Link, router, useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  Modal,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleSignIn = () => {
    if (email === "" || password === "") {
      setModalVisible(true);
    } else {
      router.push("../../Home");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 30 }}>
      {/* <View style={{backgroundColor: '#00000099', width: "100%", height: '100%', flex: 1, zIndex: 999}}> */}
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#0F315E", fontSize: 20, fontWeight: "600" }}>
            Sign In
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
            Sign In to Your Account
          </Text>
        </View>
        <View style={{ marginTop: 50, width: "100%", paddingHorizontal: 20 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#0F315E" }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter Your Email"
              placeholderTextColor={"black"}
              style={{
                padding: 15,
                borderRadius: 10,
                width: "100%",
                marginTop: 10,
                marginVertical: 10,
                fontSize: 15,
                backgroundColor: "#F4F4F4",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#0F315E",
                marginTop: 30,
              }}
            >
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter Your Password"
              placeholderTextColor={"black"}
              style={{
                padding: 15,
                borderRadius: 10,
                width: "100%",
                marginTop: 10,
                marginVertical: 10,
                fontSize: 15,
                backgroundColor: "#F4F4F4",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginLeft: 10 }}>Remember Me</Text>
            </View>
            <Pressable>
              <Link href="../ForgetPassword/page" style={{ color: "#017CFD" }}>
                Forgot Password?
              </Link>
            </Pressable>
          </View>

          <Pressable
            onPress={handleSignIn}
            style={{
              backgroundColor: "#0F315E",
              width: "100%",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
              Sign In
            </Text>
          </Pressable>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "#cccccc" }} />
              <View>
                <Text
                  style={{
                    width: 150,
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#737373",
                  }}
                >
                  Or Continue With
                </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "#cccccc" }} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                gap: 10,
              }}
            >
              <TouchableHighlight>
                <Image source={require("../../../assets/images/google.png")} />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                  source={require("../../../assets/images/facebook.png")}
                  style={{ marginLeft: 10 }}
                />
              </TouchableHighlight>
            </View>
          </View>

          <Pressable
            style={{
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 15, fontWeight: "400" }}>
              Don't have an account?{" "}
              <Link
                href="../SignUp/page"
                style={{ color: "#017CFD", fontWeight: "500" }}
              >
                Sign Up
              </Link>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Kindly fill the blank space</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
