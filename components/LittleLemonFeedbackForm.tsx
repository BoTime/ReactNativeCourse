import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "@/constants/Colors";

const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [feedback, onChangeFeedback] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={"padding"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>

        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={"First Name"}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={"Last Name"}
        ></TextInput>
        <TextInput
          style={styles.inputBox}
          value={feedback}
          onChangeText={onChangeFeedback}
          placeholder={"Feedback"}
          multiline={true}
          maxLength={250}
        ></TextInput>
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
});

export default FeedbackForm;
