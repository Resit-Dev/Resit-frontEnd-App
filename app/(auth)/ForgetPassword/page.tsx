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
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 150,
        }}
      >
        <Text style={{ color: "#0F315E", fontSize: 20, fontWeight: "600" }}>
          Forget Password
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
          Select which method we should use to reset your password
        </Text>
      </View>
      <View>
          <View style={{display: "flex", flexDirection: "row", gap: 2}}>
            <Text>o</Text>
            <Text>Via Email</Text>
          </View>
        </View>
    </View>
  );
};

export default page;

const styles = StyleSheet.create({});
