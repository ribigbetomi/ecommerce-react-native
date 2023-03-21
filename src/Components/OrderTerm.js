import React from "react";
import {
  Text,
  Box,
  Center,
  Pressable,
  HStack,
  Image,
  VStack,
  Button,
  FlatList,
} from "native-base";
import Colors from "../color";
import Products from "../data/products";
import { useSelector } from "react-redux";

const OrderTerm = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={cartItems}
      keyExtractor={(item) => item.product}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg={Colors.white}
              shadow={5}
              rounded={10}
              overFlow="hidden"
            >
              <Center w="25%" bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2} space={2}>
                <Text isTruncated color={Colors.black} bold fontSize={10}>
                  {item.name}
                </Text>
                <Text bold color={Colors.lightBlack}>
                  &#8358;{item.price}
                </Text>
              </VStack>
              <Center>
                <Button
                  bg={Colors.main}
                  _pressed={{ bg: Colors.main }}
                  color={Colors.white}
                >
                  {item.qty}
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default OrderTerm;
