import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  useColorScheme,
} from "react-native";
import { Colors } from "@/constants/Colors";

const logo = require("../assets/images/littleLemonLogo.png");

export default function WelcomeMessage() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <ScrollView
        persistentScrollbar={true}
        style={[
          styles.innerContainer,
          colorScheme === "light"
            ? { backgroundColor: Colors.light.welcomeScreenBackground }
            : { backgroundColor: Colors.dark.welcomeScreenBackground },
        ]}
      >
        <View
          style={[
            styles.logoRow,
            colorScheme === "light"
              ? { backgroundColor: Colors.light.welcomeScreenBackground }
              : { backgroundColor: Colors.dark.welcomeScreenBackground },
          ]}
        >
          <Image style={styles.logo} source={logo} resizeMode="contain"></Image>
          <Text
            style={[
              styles.headerText,
              colorScheme === "light"
                ? { color: Colors.light.welcomeScreenText }
                : { color: Colors.dark.welcomeScreenText },
            ]}
            numberOfLines={3}
          >
            Little Lemon
          </Text>
        </View>
        <Text
          style={[
            styles.regularText,
            colorScheme === "light"
              ? { color: Colors.light.welcomeScreenText }
              : { color: Colors.dark.welcomeScreenText },
          ]}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
  innerContainer: { backgroundColor: Colors.light.welcomeScreenBackground },
  headerText: {
    flexWrap: "wrap",
    padding: 40,
    fontSize: 30,
    // textAlign: "center",
    color: Colors.light.welcomeScreenFont,
    // backgroundColor: Colors.light.welcomeScreenBackground,
  },
  regularText: {
    padding: 20,
    marginVertical: 8,
    fontSize: 24,
    color: Colors.light.welcomeScreenFont,
    textAlign: "center",
    // backgroundColor: Colors.light.welcomeScreenBackground,
  },
  logoRow: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});
