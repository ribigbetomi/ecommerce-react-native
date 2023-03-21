import React from "react";
import { Box, ScrollView, Heading } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "./../color";
import OrderInfo from "../Components/OrderInfo";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import OrderTerm from "../Components/OrderTerm";
import { useSelector } from "react-redux";

const PlaceOrderScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod } = cart;

  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle={userInfo ? userInfo.name : ""}
            text={userInfo ? userInfo.email : ""}
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle={`SHIPPING: ${shippingAddress.country}`}
            text={`Payment Method: ${paymentMethod}`}
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle={`Address: ${shippingAddress.city}`}
            text={`${(shippingAddress.address, shippingAddress.postalCode)}`}
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Terms */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold isTruncated fontSize={15} my={4}>
          Products
        </Heading>
        <OrderTerm />
        {/* Total */}
        <PlaceOrderModel />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
