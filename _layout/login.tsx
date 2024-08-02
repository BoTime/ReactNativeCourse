import { View, StyleSheet } from "react-native";

import React from "react";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LittleLemonFooter from "@/components/LittleLemonFooter";
import Login from "@/components/LittleLemonLogin";
import { Colors } from "@/constants/Colors";

export default function LoginScreen() {
  console.log("LoginScreen");
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Login />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  footerContainer: {
    backgroundColor: Colors.light.footerBackground,
    marginBottom: 10,
  },
});
