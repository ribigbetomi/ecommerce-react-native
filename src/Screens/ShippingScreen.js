import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "./../../Redux/Actions/CartActions";

const ShippingScreen = ({ navigation }) => {
  // const [shippingAddress, setShippingAddress] = useState({});
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const disabled = !city || !country || !postalCode || !address ? true : false;
  // console.log(disabled);

  const shippingAddress = { city, country, postalCode, address };
  const dispatch = useDispatch();
  // console.log(shippingAddress);

  // const Inputs = [
  //   {
  //     input: "Enter City",
  //     type: "text",
  //     value: shippingAddress.city,
  //     handleChange: (event) => {
  //       const newLocation = { ...location, city: event.target.value };
  //       setShippingAddress(newLocation);
  //     },
  //   },
  //   {
  //     input: "Enter Country",
  //     type: "text",
  //     value: shippingAddress.country,
  //   },
  //   {
  //     input: "Enter Postal Code",
  //     type: "text",
  //     value: shippingAddress.postalCode,
  //   },
  //   {
  //     input: "Enter Address",
  //     type: "text",
  //     value: shippingAddress.address,
  //   },
  // ];
  const submitHandler = () => {
    dispatch(saveShippingAddress(shippingAddress));
    navigation.navigate("CheckOut");
  };

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
            {/* {Inputs.map((i, index) => ( */}
            <FormControl>
              <FormControl.Label
                _text={{ fontSize: "12px", fontWight: "bold" }}
              >
                City
              </FormControl.Label>

              <Input
                borderWidth={1}
                value={city}
                onChangeText={(value) => setCity(value)}
                borderColor={Colors.main}
                bg={Colors.deepGray}
                py={3}
                isRequired={true}
                color={Colors.main}
                fontSize={15}
                type="text"
                _focus={{
                  bgColor: Colors.deepGray,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ fontSize: "12px", fontWight: "bold" }}
              >
                Country
              </FormControl.Label>

              <Input
                borderWidth={1}
                value={country}
                onChangeText={(value) => setCountry(value)}
                borderColor={Colors.main}
                bg={Colors.deepGray}
                isRequired={true}
                py={3}
                color={Colors.main}
                fontSize={15}
                type="text"
                _focus={{
                  bgColor: Colors.deepGray,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ fontSize: "12px", fontWight: "bold" }}
              >
                Postal Code
              </FormControl.Label>

              <Input
                borderWidth={1}
                value={postalCode}
                onChangeText={(value) => setPostalCode(value)}
                borderColor={Colors.main}
                bg={Colors.deepGray}
                isRequired={true}
                py={3}
                color={Colors.main}
                fontSize={15}
                type="text"
                _focus={{
                  bgColor: Colors.deepGray,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ fontSize: "12px", fontWight: "bold" }}
              >
                Address
              </FormControl.Label>

              <Input
                borderWidth={1}
                value={address}
                onChangeText={(value) => setAddress(value)}
                borderColor={Colors.main}
                bg={Colors.deepGray}
                isRequired={true}
                py={3}
                color={Colors.main}
                fontSize={15}
                type="text"
                _focus={{
                  bgColor: Colors.deepGray,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
            {/* ))} */}
            <Buttons
              color={Colors.white}
              disabled={disabled}
              bg={disabled ? Colors.gray : Colors.main}
              onPress={submitHandler}
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
