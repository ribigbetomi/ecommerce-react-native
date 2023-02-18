import React, { useState } from "react";
import {
  Center,
  HStack,
  Modal,
  Text,
  VStack,
  Flex,
  Button,
  Pressable,
  Image,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Buttons from "./Buttons";
import Colors from "../color";

const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();
  const OrderInfo = [
    {
      title: "products",
      price: 125.77,
      color: "black",
    },
    {
      title: "shipping",
      price: 987.87,
      color: "black",
    },
    {
      title: "tax",
      price: 15,
      color: "black",
    },
    {
      title: "Total Amount",
      price: 6547.57,
      color: "main",
    },
  ];

  return (
    <Center>
      <Buttons
        onPress={() => setShowModel(!showModel)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttons>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfo.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === "main" ? Colors.main : Colors.black}
                    bold
                  >
                    {i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              h={45}
              justifyContent="center"
              bg={Colors.paypal}
              rounded={5}
              onPress={() => setShowModel(!showModel)}
            >
              <Image
                source={require("../../assets/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              flex={1}
              mt={2}
              _text={{
                color: Colors.white,
                fontWeight: "bold",
              }}
              bg={Colors.black}
              onPress={() => {
                setShowModel(!showModel);
                navigation.navigate("Home");
              }}
              _pressed={{ bg: Colors.black }}
            >
              PAY NOW
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
