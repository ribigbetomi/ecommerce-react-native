import React from "react";
import { Box, ScrollView, Heading } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "./../color";
import OrderInfo from "../Components/OrderInfo";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import OrderTerm from "../Components/OrderTerm";

const PlaceOrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Admin Doe"
            text="admin@example.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="SHIPPING: Tanzania"
            text="Payment Method: Paypal"
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
            subTitle="Address:"
            text="this is Dumyy address"
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
