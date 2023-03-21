import React from "react";
import { Text, Box, Center } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import Buttons from "./Buttons";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";

const CartEmpty = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} px={4} pb={50}>
      <Center height="90%">
        <Center w={20} h={20} bgColor={Colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={50} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5} fontSize={20}>
          Cart Is Empty
        </Text>
      </Center>
      <Buttons
        bg={Colors.black}
        color={Colors.white}
        onPress={() => navigation.navigate("Home")}
      >
        START SHOPPING
      </Buttons>
    </Box>
  );
};

export default CartEmpty;
