import React, { useState } from "react";
import {
  Text,
  Box,
  Center,
  ScrollView,
  VStack,
  HStack,
  Image,
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../Components/Buttons";
import Colors from "../color";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { savePaymentMethod } from "../../Redux/Actions/CartActions";

const PaymentScreen = ({ navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const isDisabled = !paymentMethod ? true : false;

  const dispatch = useDispatch();

  // const paymentMethod = [
  //   {
  //     image: require("../../assets/paypal.png"),
  //     alt: "paypal",
  //     Icons: "Ionicons",
  //   },
  //   {
  //     image: require("../../assets/discover.png"),
  //     alt: "discover",
  //     Icons: "fontAwesome",
  //   },
  //   {
  //     image: require("../../assets/googlepay.png"),
  //     alt: "googlepay",
  //     Icons: "fontAwesome",
  //   },
  // ];

  const submitHandler = () => {
    dispatch(savePaymentMethod(paymentMethod));
    navigation.navigate("PlaceOrder");
  };
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          Select Payment Method
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" px="5" bg={Colors.deepGray}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {/* {paymentMethod.map((i, index) => ( */}
            <TouchableOpacity onPress={() => setPaymentMethod("Paystack")}>
              <HStack
                alignItems="center"
                justifyContent="space-between"
                px={1}
                py={1}
                rounded={10}
                bg={Colors.white}
              >
                <Image
                  source={require("../../assets/paystack.png")}
                  alt="Paystack"
                  resizeMode="contain"
                  w={120}
                  h={50}
                />
                {paymentMethod === "Paystack" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPaymentMethod("Stripe")}>
              <HStack
                alignItems="center"
                justifyContent="space-between"
                mt={5}
                px={1}
                py={1}
                rounded={10}
                bg={Colors.white}
              >
                <Image
                  source={require("../../assets/stripe.png")}
                  alt="Paystack"
                  resizeMode="contain"
                  w={120}
                  h={50}
                />
                {paymentMethod === "Stripe" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            </TouchableOpacity>
            {/* // ))} */}
            <Buttons
              color={Colors.white}
              bg={isDisabled ? Colors.gray : Colors.main}
              onPress={submitHandler}
              disabled={isDisabled}
            >
              CONTINUE
            </Buttons>
            {/* <Text italic textAlign="center">
              Payment Method IS <Text bold>Paystack</Text> by default
            </Text> */}
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
