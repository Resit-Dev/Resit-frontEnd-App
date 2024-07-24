import { Link, useNavigation } from "expo-router";
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
  StatusBar,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar />
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            justifyContent: "center",

            alignItems: "center",
          }}
        >
         
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 20 }}>
            Sign In to Your Account
          </Text>
        </View>
        <View style={{ marginTop: 50, width: "100%", paddingHorizontal: 20 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#737373" }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter Your Email"
              placeholderTextColor={"#737373"}
              style={{
                padding: 15,
                borderRadius: 10,
                width: "100%",
                marginTop: 10,
                marginVertical: 10,
                fontSize: email ? 15 : 15,
                backgroundColor: "#F4F4F4",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#737373",
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
              placeholderTextColor={"#737373"}
              style={{
                padding: 15,
                borderRadius: 10,
                width: "100%",
                marginTop: 10,
                marginVertical: 10,
                fontSize: email ? 15 : 15,
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
          </View>

          <Pressable
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
              Verify
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default page;

