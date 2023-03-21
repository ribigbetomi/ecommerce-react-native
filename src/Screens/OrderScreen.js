import React, { useEffect, useState } from "react";
import { Box, ScrollView, Heading, Text } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "./../color";
import OrderInfo from "./../Components/OrderInfo";
import OrderTerm from "./../Components/OrderTerm";
import OrderModel from "./../Components/OrderModel";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import { url } from "../../splice/api";
import { getOrderDetails } from "../../Redux/Actions/OrderActions";
import { ORDER_PAY_RESET } from "./../../Redux/Constants/OrderConstants";
import Loading from "../Components/loadingError/Loading";

const OrderScreen = ({ route }) => {
  const orderId = route.params;
  // console.log(orderId, "routeId");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod } = cart;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  // console.log(order, "od");

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  useEffect(() => {
    if (successPay) {
      dispatch(getOrderDetails(orderId));
      // dispatch({ type: ORDER_PAY_RESET });
    }
  }, [dispatch, orderId, successPay]);

  return (
    // <View>
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        {error && <Text>Error</Text>}

        {loading && <Loading />}

        {order && (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <OrderInfo
              title="CUSTOMER"
              subTitle={userInfo ? userInfo.name : ""}
              text={userInfo ? userInfo.email : ""}
              icon={<FontAwesome name="user" size={30} color={Colors.white} />}
              danger={!order.isPaid ? true : false}
              success={order.isPaid ? true : false}
            >
              {order.isPaid ? (
                <> Paid at {moment(order.paidAt).format("lll")}</>
              ) : (
                "Not Paid"
              )}
            </OrderInfo>
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
              danger={!order.isDelivered}
              success={order.isDelivered}
            >
              {order.isDelivered ? "Delivered" : "Not Delivered"}
            </OrderInfo>
            <OrderInfo
              title="DELIVER TO"
              subTitle={`Address: ${shippingAddress.city}`}
              text={`${(shippingAddress.address, shippingAddress.postalCode)}`}
              icon={
                <Ionicons
                  name="location-sharp"
                  size={30}
                  color={Colors.white}
                />
              }
              danger={!order.isDelivered}
              success={order.isDelivered}
            >
              {order.isDelivered ? "Delivered" : "Not Delivered"}
            </OrderInfo>
          </ScrollView>
        )}
      </Box>
      {/* // )} */}
      {/* Order Terms */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold isTruncated fontSize={15} my={4}>
          Products
        </Heading>
        <OrderTerm />
        {/* Total */}
        <OrderModel />
      </Box>
      {/* // </View> */}
    </Box>
  );
};

export default OrderScreen;
