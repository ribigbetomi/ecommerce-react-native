import React, { useEffect, useState } from "react";
import { Center, HStack, Modal, Text, VStack, Flex, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Buttons from "./Buttons";
import Colors from "../color";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getOrderDetails } from "../../Redux/Actions/OrderActions";
import { ORDER_CREATE_RESET } from "../../Redux/Constants/OrderConstants";
import { ORDER_PAY_RESET } from "./../../Redux/Constants/OrderConstants";
import Currency from "react-currency-formatter";

const PlaceOrderModel = () => {
  const [showModel, setShowModel] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const orderDetails = useSelector((state) => state.orderDetails);
  const {
    order: orderDetailss,
    success: successDetails,
    error: errorDetails,
  } = orderDetails;

  useEffect(() => {
    if (success) {
      dispatch(getOrderDetails(order._id));
      // dispatch({ type: ORDER_PAY_RESET });
      navigation.navigate("Order", order._id);
      dispatch({ type: ORDER_CREATE_RESET });
      // console.log(orderDetailss, "placeordermodelOrderDetails");
    }
  }, [success, order, navigation]);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // console.log(itemsPrice);
  const shippingPrice = (0.2 * itemsPrice).toFixed(0);
  const totalPrice = Number(itemsPrice) + Number(shippingPrice);
  // console.log(shippingPrice, "shipping");
  // console.log(itemsPrice, "items");
  // console.log(totalPrice, "total");

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
    if (!userInfo) {
      setShowModel(!showModel);
      navigation.navigate("Login");
    } else {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(
        createOrder({
          orderItems: cartItems,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          shippingPrice,
          totalPrice,
        })
      );
      setShowModel(!showModel);
      // navigation.navigate("Order");
    }
  };

  return (
    <>
      <Buttons
        onPress={() => setShowModel(!showModel)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        SHOW TOTAL
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
                    <Text fontWeight="medium">{i.title} </Text>
                    <Text
                      color={i.color === "main" ? Colors.main : Colors.black}
                      bold
                    >
                      {/* <Currency quantity={i.price} currency="NGN" /> */}
                      &#8358;{i.price}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex={1}
                _text={{
                  color: Colors.white,
                  fontWeight: "bold",
                }}
                bg={Colors.main}
                onPress={submitHandler}
                _pressed={{ bg: Colors.main }}
              >
                Place An Order
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </>
  );
};

export default PlaceOrderModel;
