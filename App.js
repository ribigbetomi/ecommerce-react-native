import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import BottomNav from "./src/Navigations/BottomNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Bottom" component={BottomNav} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
