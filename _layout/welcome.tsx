import { Pressable, StyleSheet, Text } from "react-native";

import { View } from "react-native";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import LittleLemonFooter from "@/components/LittleLemonFooter";
import LittleLemonWelcomeMessage from "@/components/LittleLemonWelcomeMessage";
import { Colors } from "@/constants/Colors";

console.log("index");
export default function WelcomeScreen({ route, navigation }) {
  console.log("WelcomeScreen");
  const { username } = route.params;
  return (
    <>
      <View style={styles.container}>
        {/* <LittleLemonHeader /> */}
        <LittleLemonWelcomeMessage username={username} />
        <Pressable onPress={() => navigation.navigate("Menu")}>
          <Text style={styles.buttonText}>View Menu</Text>
        </Pressable>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.light.background,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    color: "grey",
    backgroundColor: Colors.light.background,
  },
  footerContainer: { backgroundColor: Colors.light.footerBackground },
});
