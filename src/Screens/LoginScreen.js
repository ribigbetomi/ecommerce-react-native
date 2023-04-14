import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/UserActions";
import Message from "../Components/loadingError/Error";
import Loading from "../Components/loadingError/Loading";

function LoginScreen({ route }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const confirm = route.params;
  // console.log(email, "em", password, "pass");

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  // console.log(userInfo, "ui");

  useEffect(() => {
    // if (userInfo && !confirm) {
    //   navigation.navigate("Cart");
    // } else
    if (userInfo) {
      navigation.navigate("Bottom");
    }
  }, [userInfo, navigation]);

  const loginHandler = (email, password) => {
    dispatch(login(email, password));
  };

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
          {error && <Message variant={Colors.red}>{error}</Message>}
          {loading && <Loading>Loading...</Loading>}
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
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
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
          // onPress={() => navigation.navigate("Bottom")}
          onPress={() => loginHandler(email, password)}
        >
          LOGIN
        </Button>
        {/* <Pressable bg={"black"} > */}
        <Button
          _pressed={{
            bg: "black",
            opacity: 0.5,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={"black"}
          onPress={() => navigation.navigate("Register")}
        >
          SIGN UP
        </Button>
        {/* </Pressable> */}
      </Box>
    </Box>
  );
}

export default LoginScreen;
