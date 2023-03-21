import React, { useState } from "react";
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
import { payOrder } from "../../Redux/Actions/OrderActions";

const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order } = orderDetails;

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // console.log(itemsPrice);
  const shippingPrice = (0.2 * itemsPrice).toFixed(0);
  const totalPrice = itemsPrice + shippingPrice;

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
                  w="full"
                  h={45}
                  justifyContent="center"
                  bg={Colors.paypal}
                  rounded={5}
                  onPress={submitHandler}
                >
                  <Image
                    source={require("../../assets/paystack.png")}
                    alt="paypal"
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
