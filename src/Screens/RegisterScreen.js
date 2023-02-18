import React from "react";
import {
  Box,
  Heading,
  VStack,
  Input,
  Image,
  Text,
  View,
  Button,
  Pressable,
  Center,
} from "native-base";
import Colors from "./../color";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

function RegisterScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors.black}>
      {/* <Center w="100%" m="auto"> */}
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="200"
        px="6"
        // justifyContent="center"
        // zIndex="1"
      >
        <Heading>SIGN UP</Heading>

        <VStack space={5} pt="6">
          {/* USERNAME */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="John Doe"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* EMAIL */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="*******"
            w="70%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          onPress={() => navigation.navigate("Bottom")}
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          //   _text={{
          //     color: Colors.white,
          //   }}
        >
          SIGN UP
        </Button>
        <Pressable onPress={() => navigation.navigate("Login")} mt={4}>
          <Text color={Colors.white} fontWeight="bold" fontSize="lg">
            LOGIN
          </Text>
        </Pressable>
      </Box>
      {/* </Center> */}
    </Box>
  );
}

export default RegisterScreen;
