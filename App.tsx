import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/navigation/stack_navigator";
import { theme } from "./src/global";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  NavigationBar.setBackgroundColorAsync(theme.colors.background);
  return (
    <NavigationContainer theme={theme}>
      <MyStack />
    </NavigationContainer>
  );
}
