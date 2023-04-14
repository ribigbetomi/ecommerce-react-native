import React, { useState } from "react";
import { Box, HStack, Input, Pressable, View } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../color";
import { useSelector } from "react-redux";

const HomeSearch = () => {
  const navigation = useNavigation();
  const { cartItems } = useSelector((state) => state.cart);

  const [keyword, setKeyword] = useState("");
  console.log(keyword, "key");

  const submitHandler = () => {
    // if (keyword) {
    navigation.navigate("Home", { keyword });
    // }
  };

  return (
    <HStack
      space={3}
      w="100%"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <HStack bg={"#fff"} alignItems="center" w="90%">
        <View style={{ flex: 1 }}>
          <Input
            placeholder="Nike, Puma, Adidas ...etc"
            w="85%"
            bg={Colors.white}
            type="search"
            h={12}
            borderWidth={0}
            _focus={{
              bgColor: Colors.white,
            }}
            onChangeText={(value) => setKeyword(value)}
            onSubmitEditing={submitHandler}
            returnKeyType="search"
            variant="filled"
          />
        </View>
        <Pressable
          style={{
            backgroundColor: Colors.main,
            padding: 10,
            borderRadius: 20,
            marginRight: 5,
          }}
          onPress={submitHandler}
        >
          <FontAwesome5 name="search" size={25} color={Colors.white} />
        </Pressable>
      </HStack>

      <Pressable ml={1} onPress={() => navigation.navigate("Cart")}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          {cartItems.length}
        </Box>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;
