import React from "react";
// import { Text } from "react-native";
import {
  Box,
  Heading,
  VStack,
  Input,
  Image,
  Text,
  Button,
  Pressable,
} from "native-base";
import Colors from "./../color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} bg={Colors.black}>
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
        <Heading>LOGIN</Heading>

        <VStack space={5} pt="6">
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
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => navigation.navigate("Bottom")}
        >
          LOGIN
        </Button>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.white} fontWeight="bold" fontSize="lg">
            SIGN UP
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
