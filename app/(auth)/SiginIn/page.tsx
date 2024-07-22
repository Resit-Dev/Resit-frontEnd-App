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
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            justifyContent: "center",

            alignItems: "center",
          }}
        >
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              /> */}
              <Text style={{ marginLeft: 10 }}>Remember Me</Text>
            </View>
            <Pressable
            // onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Link
                href="../ForgetPassword/page"
                style={{ color: "#017CFD" }}
              >
                Forgot Password?
              </Link>
            </Pressable>
          </View>

          <Pressable
            // onPress={HandleLogin}
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
              <Link href='../../Home/(tabs)'>
              Sign In
              </Link>
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
              <View
                style={{ flex: 1, height: 1, backgroundColor: "#cccccc" }}
              />
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
              <View
                style={{ flex: 1, height: 1, backgroundColor: "#cccccc" }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image source={require("../../../assets/images/google.png")} />
              <Image
                source={require("../../../assets/images/facebook.png")}
                style={{ marginLeft: 10 }}
              />
            </View>
          </View>

          <Pressable
            //   onPress={()  => navigation.navigate("Register")}
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
    </ScrollView>
  );
};

export default page;

const styles = StyleSheet.create({});
