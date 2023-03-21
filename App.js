import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import BottomNav from "./src/Navigations/BottomNav";
import { Provider } from "react-redux";
import store from "./Redux/store";
import PaystackPayment from "./src/Components/PaystackPayment";
// import { ToastContainer } from "react-native-toastify";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          {/* <ToastContainer /> */}
          <StatusBar style="auto" />
          <Stack.Navigator
            initialRouteName="Bottom"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Bottom" component={BottomNav} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Paystack" component={PaystackPayment} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
