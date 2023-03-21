import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Pressable, Text } from "native-base";
import React from "react";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import ProfileScreen from "./../Screens/ProfileScreen";
import CartScreen from "./../Screens/CartScreen";
import StackNav from "./StackNav";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    _pressed={{ color: Colors.black }}
    bgColor={Colors.main}
    w={70}
    h={70}
    rounded="full"
    top={-30}
    shadow={3}
  >
    {children}
  </Pressable>
);

const BottomNav = () => {
  const navigation = useNavigation();

  function isAuthenticated() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    if (userInfo) {
      return true;
    }
  }

  return (
    <Tab.Navigator
      backBehavior="main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...style.tab },
        headerShown: false,
        tabBarHiddenOnKeyboard: true,
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      {/* Cart */}
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5
                  name="shopping-basket"
                  size={24}
                  color={Colors.white}
                />
              ) : (
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={24}
                  color={Colors.white}
                />
              )}
            </Center>
          ),
        }}
      />
      {/* Profile */}
      {/* {isAuthenticated() ? ( */}
      <Tab.Screen
        name="Profile"
        component={isAuthenticated() ? ProfileScreen : LoginScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      {/* ) : (
        navigation.navigate("Login")
      )} */}
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  tab: {
    elevation: 0,
    backGroundColor: Colors.white,
    height: 60,
  },
});

export default BottomNav;
