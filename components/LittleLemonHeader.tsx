import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function LittleLemonHeader() {
  // F4CE14
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: Colors.light.headerFont,
          textAlign: "center",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: Colors.light.headerBackground,
    paddingTop: 40,
  },
});
