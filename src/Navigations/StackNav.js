import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./../Screens/HomeScreen";
import SingleProductScreen from "./../Screens/SingleProductScreen";
import ShoppingScreen from "./../Screens/ShippingScreen";
import PaymentScreen from "./../Screens/PaymentScreen";
import PlaceOrderScreen from "./../Screens/PlaceOrderScreen";
import CartScreen from "./../Screens/CartScreen";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Single" component={SingleProductScreen} />
      <Stack.Screen name="Shipping" component={ShoppingScreen} />
      <Stack.Screen name="CheckOut" component={PaymentScreen} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
