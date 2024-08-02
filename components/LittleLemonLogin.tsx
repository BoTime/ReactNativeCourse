import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Pressable,
} from "react-native";
import { Colors } from "@/constants/Colors";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>Welcome to Little Lemon</Text>
        <Text style={styles.infoSection}>
          {isLoggedIn ? "You are logged in!" : "Login to continue"}
        </Text>

        {!isLoggedIn && (
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"email"}
            keyboardType={"email-address"}
          ></TextInput>
        )}
        {!isLoggedIn && (
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={"password"}
            secureTextEntry={true}
          ></TextInput>
        )}
        <Pressable
          onPress={() => {
            // setLoggedIn(!isLoggedIn);
            navigation.navigate("Welcome", {
              username: email,
            });
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {isLoggedIn ? "Log out" : "Log in"}
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.welcomeScreenBackground,
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: Colors.light.text,
    textAlign: "center",
    backgroundColor: Colors.light.welcomeScreenBackground,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: Colors.light.text,
    textAlign: "center",
    backgroundColor: Colors.light.welcomeScreenBackground,
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  button: {
    fontSize: 22,
    padding: 5,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: Colors.light.text,
    textAlign: "center",
    fontSize: 25,
  },
});

export default Login;
