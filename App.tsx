import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/stack_navigator';
import { theme } from './src/global';

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <MyStack />
    </NavigationContainer>
  );
}