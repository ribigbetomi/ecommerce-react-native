import React, { useEffect, useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Center } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../../splice/api";
import {
  getOrderDetails,
  payOrder,
  payOrderr,
} from "../../Redux/Actions/OrderActions";
import { useNavigation } from "@react-navigation/native";

export default function PaystackPayment() {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;
  // console.log(order, "orrr");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { success } = useSelector((state) => state.orderPay);

  useEffect(() => {
    if (success) {
      dispatch(getOrderDetails(order._id));
      navigation.navigate("Order", order._id);
    }
  }, [success, order]);

  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_live_0555b377835bff12762dacbc8eda745bae69d126"
        billingEmail="ribigbetomi@gmail.com"
        billingMobile="09050697380"
        billingName="Adetomi"
        amount={order.totalPrice}
        onCancel={(e) => {
          // handle response here
          // console.log(e);
        }}
        onSuccess={(res) => {
          let reference = res.data.transactionRef.reference;
          // console.log(reference, "ref");
          let orderId = order._id;
          // console.log(orderId, "idOnSuccess");
          // console.log(orderId);
          dispatch(payOrderr(orderId, reference));
          // navigation.navigate("Order", orderId);
          // dispatch(getOrderDetails(orderId));

          //   if (res.data.event === "successful" && res.status === "success") {
          //     let config = {
          //       headers: {
          //         "Content-Type": "application/json",
          //         Authorization: `Bearer ${userInfo.token}`,
          //       },
          //     };
          //     await axios.put(
          //       `${url}/api/orders/${order._id}/${res.data.transactionRef.reference}/paystack`,
          //       config
          //     );
          //     navigation.navigate("Order", order._id);
          //   } else {
          //     console.log("Order Failed");
          //   }
          // handle response here
          // console.log(res);
        }}
        ref={paystackWebViewRef}
      />
      <Center flex={1}>
        <TouchableOpacity
          style={styles.paystack}
          onPress={() => paystackWebViewRef.current.startTransaction()}
        >
          <Text style={styles.pay}>Pay Now</Text>
        </TouchableOpacity>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  paystack: {
    minWidth: "60%",
    backgroundColor: "#F9A826",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pay: {
    color: "white",
  },
});
