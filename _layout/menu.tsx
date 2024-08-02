import { View, StyleSheet, Pressable, Text } from "react-native";

import React from "react";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LittleLemonMenu from "@/components/LittleLemonMenuV2";
import { Colors } from "@/constants/Colors";

export default function MenuScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        {/* <LittleLemonHeader /> */}
        <LittleLemonMenu />
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Go back</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    color: "grey",
    backgroundColor: Colors.light.background,
  },
});
