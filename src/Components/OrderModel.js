import React, { useEffect, useState } from "react";
import {
  Center,
  HStack,
  Modal,
  Text,
  VStack,
  Flex,
  Button,
  Pressable,
  Image,
  View,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Buttons from "./Buttons";
import Colors from "../color";
import { useDispatch, useSelector } from "react-redux";
import PaystackPayment from "./PaystackPayment";
import {
  getOrderDetails,
  paymentIntent,
  payOrder,
  payOrderStripe,
} from "../../Redux/Actions/OrderActions";
import { Alert } from "react-native";
import { useStripe } from "@stripe/stripe-react-native";

const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order } = orderDetails;

  const { intent, error } = useSelector((state) => state.paymentIntent);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // console.log(itemsPrice, "itemsPrice");
  const shippingPrice = (0.2 * itemsPrice).toFixed(2);
  // console.log(shippingPrice, "shippingPrice");
  const totalPrice = Number(itemsPrice) + Number(shippingPrice);
  // console.log(totalPrice, "totalPrice");

  useEffect(() => {
    if (successPay) {
      // dispatch(getOrderDetails(order._id));
      navigation.navigate("Order", order._id);
    }
  }, [successPay, order]);

  useEffect(() => {
    dispatch(paymentIntent({ amount: Math.floor(totalPrice * 100) }));
  }, [totalPrice]);

  const OrderInfo = [
    {
      title: "Items Price",
      price: itemsPrice,
      color: "main",
    },
    {
      title: "Shipping Fee",
      price: shippingPrice,
      color: "main",
    },
    {
      title: "Total Amount",
      price: totalPrice,
      color: "main",
    },
  ];

  const submitHandler = () => {
    setShowModel(false);
    navigation.navigate("Paystack");
    // dispatch(payOrder(order._id));
  };

  const onCheckout = async () => {
    setShowModel(false);
    if (intent) {
      // console.log(intent, "intent");
    } else if (error) {
      Alert.alert("Something went wrong", error);
      return;
    }
    if (intent) {
      const { error: paymentSheetError } = await initPaymentSheet({
        merchantDisplayName: "Adetomi, Inc",
        paymentIntentClientSecret: intent.paymentIntent,
        defaultBillingDetails: {
          name: "Adetomi",
        },
      });
      if (paymentSheetError) {
        Alert.alert("Something went wrong", paymentSheetError.message);
        return;
      }
      const { error: paymentError } = await presentPaymentSheet();
      if (paymentError) {
        Alert.alert(`Error code: ${paymentError.code}`, paymentError.message);
        return;
      }
      // onCreateOrder();
      let orderId = order._id;
      dispatch(payOrderStripe(orderId));
      // navigation.navigate("OrderScreen", orderId);
    }
  };

  return (
    <>
      <Buttons
        onPress={() => setShowModel(!showModel)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttons>
      <Center>
        <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
          <Modal.Content maxWidth={350}>
            <Modal.CloseButton />
            <Modal.Header>Order</Modal.Header>
            <Modal.Body>
              <VStack space={7}>
                {OrderInfo.map((i, index) => (
                  <HStack
                    key={index}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontWeight="medium">{i.title}</Text>
                    <Text
                      color={i.color === "main" ? Colors.main : Colors.black}
                      bold
                    >
                      &#8358;{i.price}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Modal.Body>
            {!successPay && (
              <Modal.Footer>
                <Pressable
                  style={{ display: paymentMethod !== "Paystack" && "none" }}
                  w="full"
                  h={45}
                  justifyContent="center"
                  bg={Colors.paypal}
                  rounded={5}
                  onPress={submitHandler}
                >
                  <Text
                    style={{
                      position: "absolute",
                      left: 10,
                      bottom: 10,
                      color: "#fff",
                    }}
                  >
                    CLICK TO PAY
                  </Text>
                  <Image
                    source={require("../../assets/paystack.png")}
                    alt="paystack"
                    resizeMode="contain"
                    w="full"
                    h={34}
                  />
                </Pressable>
                <Pressable
                  style={{ display: paymentMethod !== "Stripe" && "none" }}
                  w="full"
                  h={45}
                  mt={5}
                  justifyContent="center"
                  bg={Colors.paypal}
                  rounded={5}
                  onPress={onCheckout}
                >
                  <Text
                    style={{
                      position: "absolute",
                      left: 10,
                      bottom: 10,
                      color: "#fff",
                    }}
                  >
                    CLICK TO PAY
                  </Text>
                  <Image
                    source={require("../../assets/stripe.png")}
                    alt="stripe"
                    resizeMode="contain"
                    w="full"
                    h={34}
                  />
                </Pressable>

                {/* <Button
                flex={1}
                mt={2}
                _text={{
                  color: Colors.white,
                  fontWeight: "bold",
                }}
                bg={Colors.black}
                onPress={() => {
                  setShowModel(!showModel);
                  navigation.navigate("Home");
                }}
                _pressed={{ bg: Colors.black }}
              > */}
                {/* <View className="bg-black">
                <PaystackPayment />
              </View> */}
                {/* </Button> */}
              </Modal.Footer>
            )}
          </Modal.Content>
        </Modal>
      </Center>
    </>
  );
};

export default OrderModel;
