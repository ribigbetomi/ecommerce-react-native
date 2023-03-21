import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Center,
  Pressable,
  HStack,
  Image,
  VStack,
  Button,
  View,
  FlatList,
} from "native-base";
// import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "./../color";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/Actions/CartActions";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Loading from "./loadingError/Loading";
import Message from "./loadingError/Error";
import Currency from "react-currency-formatter";

const Swiper = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState();
  // console.log(quantity, "qq");
  // const [cartItems, setCartItems] = useState([]);

  const cart = useSelector((state) => state.cart);
  const { loading, error, cartItems } = cart;

  return (
    // <View>
    //   <Text>Cart</Text>
    // </View>
    <>
      {error && <Message variant={Colors.red}>{error} </Message>}
      {loading && <Loading />}
      {cartItems && (
        <FlatList
          showsVerticalScrollIndicator={false}
          // vertical
          data={cartItems}
          keyExtractor={(item) => item.product}
          renderItem={({ item }) => {
            // setQuantity(item.qty);
            return (
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
                    <VStack w="50%" px={2} space={2}>
                      <Text isTruncated color={Colors.black} bold fontSize={10}>
                        {item.name}
                      </Text>
                      <Text bold color={Colors.lightBlack}>
                        {/* <Currency
                          quantity={item.price * item.qty}
                          currency="NGN"
                        /> */}
                        &#8358;{item.price * item.qty}
                      </Text>
                    </VStack>
                    <HStack>
                      <TouchableOpacity
                        onPress={() => dispatch(removeFromCart(item.product))}
                      >
                        <Ionicons name="trash" color="#00CCBB" size={30} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          dispatch(
                            addToCart(item.product, Number(item.qty) + 1)
                          )
                        }
                      >
                        <Ionicons name="add-circle" color="#00CCBB" size={30} />
                      </TouchableOpacity>
                    </HStack>
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
            );
          }}
        />
      )}
    </>
  );
};
{
  /* // <SwipeListView
    //   rightOpenValue={-50}
    //   previewOpenValue={-40}
    //   previewRowKey="0"
    //   previewOpenDelay={3000}
    //   data={Products}
    //   renderHiddenItem={renderHiddenItem}
    //   renderItem={renderItem}
    //   showsVerticalScrollIndicator={false}
    // /> */
}

const renderItem = (data) => {
  return (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={5}
          rounded={10}
          overFlow="hidden"
        >
          <Center w="25%" bg={Colors.deepGray}>
            <Image
              source={{ uri: data.item.image }}
              alt={data.item.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
          </Center>
          <VStack w="60%" px={2} space={2}>
            <Text isTruncated color={Colors.black} bold fontSize={10}>
              {data.item.name}
            </Text>
            <Text bold color={Colors.lightBlack}>
              ${data.item.price}
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.main}
              _pressed={{ bg: Colors.main }}
              color={Colors.white}
            >
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
};

const renderHiddenItem = () => {
  return (
    <Pressable
      w={50}
      roundedTopRight={10}
      roundedBottomRight={10}
      h="88%"
      ml="auto"
      justifyContent="center"
      bg={Colors.red}
    >
      <Center space={2}>
        <FontAwesome name="trash" size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );
};

const CartItems = () => {
  return (
    // <Box m={6}>
    // </Box>
    <Swiper />
  );
};

export default CartItems;
