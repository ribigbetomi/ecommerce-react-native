import React, { useEffect, useState } from "react";
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
import { register } from "../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/loadingError/Error";
import Loading from "../Components/loadingError/Loading";
import { useNavigation } from "@react-navigation/native";

function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigation = useNavigation();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const {
    error: errorRegister,
    loading: loadingRegister,
    userInfo: userInfoRegister,
  } = userRegister;

  useEffect(() => {
    // if (userInfo && !confirm) {
    //   navigation.navigate("Cart");
    // } else
    if (userInfo) {
      navigation.navigate("Bottom");
    }
  }, [userInfo, navigation]);

  const registerHandler = () => {
    dispatch(register(name, email, password));
  };

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
          {errorRegister && <Message variant={Colors.red}>{error}</Message>}
          {loadingRegister && <Loading>Loading...</Loading>}
          {/* USERNAME */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            value={name}
            onChangeText={(e) => setName(e)}
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
            value={email}
            onChangeText={(e) => setEmail(e)}
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
            value={password}
            onChangeText={(e) => setPassword(e)}
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
          onPress={registerHandler}
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
