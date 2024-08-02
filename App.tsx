import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./_layout/welcome";
import LoginScreen from "./_layout/login";
import MenuScreen from "./_layout/menu";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: styles.navigationHeader,
          headerTitleStyle: styles.navigationHeaderTitle,
          headerTintColor: Colors.light.navigationHeaderTint,
          headerTitleAlign: "center"
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.welcomeScreenBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationHeader: {
    backgroundColor: Colors.light.headerBackground,
  },
  navigationHeaderTitle: {
    fontWeight: "bold",
  },
});

export default App;
