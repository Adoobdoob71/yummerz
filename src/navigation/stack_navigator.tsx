import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ header: (props) => null }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}