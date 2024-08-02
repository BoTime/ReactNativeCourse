import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.innerContainer}>
        All rights reserved by Little Lemon, 2024
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.footerBackground,
    padding: 5,
    marginBottom: 5,
  },
  innerContainer: {
    fontSize: 18,
    fontStyle: "italic",
    color: Colors.light.footerFont,
    textAlign: "center",
  },
});
