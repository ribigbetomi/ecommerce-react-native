import React, { useEffect } from "react";
import {
  Text,
  ScrollView,
  Pressable,
  HStack,
  Button,
  Center,
} from "native-base";
import { Box } from "native-base";
import Colors from "./../color";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "./../../Redux/Actions/OrderActions";
import Message from "./loadingError/Error";
import Loading from "./loadingError/Loading";
import moment from "moment";

const Order = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.orderListMy);
  // console.log(orders?.length, "ord");
  useEffect(() => {
    dispatch(listMyOrders());
  }, []);

  return (
    <Box w="full" bg={Colors.white} flex={1} pt={5}>
      {error && <Message variant={Colors.red}>{error} </Message>}
      {loading && <Loading />}
      {orders && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Orders */}
          {orders.map((order) => (
            <Pressable key={order._id}>
              <HStack
                space={4}
                justifyContent="space-between"
                alignItems="center"
                bg={Colors.deepGray}
                py={5}
                px={5}
              >
                <Text fontSize={9} color={Colors.blue} isTruncated>
                  {order._id.length > 12
                    ? `${order._id.slice(0, 12)}...`
                    : order._id}
                </Text>
                <Text fontSize={12} bold color={Colors.black} isTruncated>
                  {order.isPaid ? "PAID" : "NOT PAID"}
                </Text>
                <Text fontSize={11} italic color={Colors.black} isTruncated>
                  {order.isPaid ? (
                    <Text>{moment(order.paidAt).format("ll")}</Text>
                  ) : (
                    <Text>{moment(order.createdAt).format("ll")}</Text>
                  )}
                </Text>
                <Button
                  px={7}
                  py={1.5}
                  rounded={50}
                  bg={order.isPaid ? Colors.main : Colors.red}
                  _text={{ color: Colors.white }}
                  _pressed={{ bg: Colors.main }}
                >
                  <Text>&#8358;{order.totalPrice}</Text>
                </Button>
              </HStack>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </Box>
  );
};

export default Order;
