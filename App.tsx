import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import WelcomeScreen from "./_layout/welcome";
import LoginScreen from "./_layout/login";
import MenuScreen from "./_layout/menu";

// const MyNavigator = createNativeStackNavigator();
// const MyNavigator = createBottomTabNavigator();
const MyNavigator = createDrawerNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <MyNavigator.Navigator
    //     initialRouteName="Login"
    //     screenOptions={({ route }) => ({
    //       headerStyle: styles.navigationHeader,
    //       headerTitleStyle: styles.navigationHeaderTitle,
    //       headerTintColor: Colors.light.navigationHeaderTint,
    //       headerTitleAlign: "center",
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;

    //         if (route.name === "Welcome") {
    //           iconName = focused ? "home" : "home-outline";
    //           return <Ionicons name={iconName} size={size} color={color} />;
    //         } else if (route.name === "Menu") {
    //           iconName = focused ? "menu" : "menu-outline";
    //           return <Ionicons name={iconName} size={size} color={color} />;
    //         } else if (route.name === "Login") {
    //           iconName = "login";
    //           return (
    //             <MaterialIcons name={iconName} size={size} color={color} />
    //           );
    //         }
    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //       tabBarActiveTintColor: Colors.light.headerBackground,
    //       tabBarInactiveTintColor: "gray",
    //     })}
    //   >
    //     <MyNavigator.Screen name="Welcome" component={WelcomeScreen} />
    //     <MyNavigator.Screen name="Login" component={LoginScreen} />
    //     <MyNavigator.Screen name="Menu" component={MenuScreen} />
    //   </MyNavigator.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <MyNavigator.Navigator>
        <MyNavigator.Screen name="Welcome" component={WelcomeScreen} />
        <MyNavigator.Screen name="Login" component={LoginScreen} />
        <MyNavigator.Screen name="Menu" component={MenuScreen} />
      </MyNavigator.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.light.welcomeScreenBackground,
    backgroundColor: "red",
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
