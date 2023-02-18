import React from "react";
import {
  View,
  Text,
  Box,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Input,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Colors from "../color";
import Buttons from "../Components/Buttons";

const ShippingScreen = ({ navigation }) => {
  const Inputs = [
    {
      input: "Enter City",
      type: "text",
    },
    {
      input: "Enter Country",
      type: "text",
    },
    {
      input: "Enter Postal Code",
      type: "text",
    },
    {
      input: "Enter Address",
      type: "text",
    },
  ];

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" px="5" bg={Colors.white}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5} pb={10}>
            {Inputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{ fontSize: "12px", fontWight: "bold" }}
                >
                  {i.input}
                </FormControl.Label>

                <Input
                  borderWidth={1}
                  borderColor={Colors.main}
                  bg={Colors.deepGray}
                  py={3}
                  color={Colors.main}
                  fontSize={15}
                  type={i.type}
                  _focus={{
                    bgColor: Colors.deepGray,
                    borderColor: Colors.main,
                    borderWidth: 1,
                  }}
                />
              </FormControl>
            ))}
            <Buttons
              color={Colors.white}
              bg={Colors.main}
              onPress={() => navigation.navigate("CheckOut")}
            >
              CONTINUE
            </Buttons>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
