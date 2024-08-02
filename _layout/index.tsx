import { StyleSheet } from "react-native";

import { View } from "react-native";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LittleLemonFooter from "@/components/LittleLemonFooter";
import LittleLemonWelcomeMessage from "@/components/LittleLemonWelcomeMessage";
import { Colors } from "@/constants/Colors";

console.log("index");
export default function WelcomeScreen() {
  console.log("WelcomeScreen");
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LittleLemonWelcomeMessage />
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
  footerContainer: { backgroundColor: Colors.light.footerBackground },
});