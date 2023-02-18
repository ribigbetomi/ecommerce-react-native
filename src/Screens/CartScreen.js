import React from "react";
import { Text, Box, Center, ScrollView, HStack, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Buttons from "../Components/Buttons";
import CartItems from "./../Components/CartItems";
import Colors from "../color";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.deepGray}>
      {/*Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/*
      if cart is empty
      <CartEmpty />
      */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CartItems />
        {/* Total */}
        <Center>
          <HStack
            rounded={50}
            bgColor={Colors.white}
            w="90%"
            justifyContent="space-between"
            alignItems="center"
            shadow={2}
            pl={5}
            h={45}
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{ bg: Colors.main }}
            >
              $365
            </Button>
          </HStack>
        </Center>
        {/* CheckOut */}
        <Buttons
          bg={Colors.black}
          color={Colors.white}
          mt={10}
          mb={10}
          onPress={() => navigation.navigate("Shipping")}
        >
          Check Out
        </Buttons>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
