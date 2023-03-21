import React, { useState } from "react";
import { Text, Box, ScrollView, VStack, FormControl, Input } from "native-base";
import Colors from "../color";
import Buttons from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import Message from "./loadingError/Error";
import Loading from "./loadingError/Loading";
import {
  getUserDetails,
  updateUserProfile,
} from "../../Redux/Actions/UserActions";
// import { toast } from "react-native-toastify";

const Profile = () => {
  const { user, loading, error } = useSelector((state) => state.userDetails);
  // console.log(user, "profile");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [compatible, setCompatible] = useState(true);
  // console.log(email, "em");
  const dispatch = useDispatch();
  // console.log(password, confirmPassword, "pp");

  const Inputs = [
    {
      input: "USER NAME",
      type: "text",
      // value: user.name,
    },
    {
      input: "Email",
      type: "email",
      // value: user.email,
    },
    {
      input: "NEW PASSWORD",
      type: "password",
      // value: "",
    },
    {
      input: "CONFIRM PASSWORD",
      type: "password",
      // value: "",
    },
  ];

  const submitHandler = () => {
    if (password !== confirmPassword) {
      setCompatible(false);
      // throw new Error("Passwords do not match");
      // toast("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ name, email, password }));
      // console.log("user updated");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      // dispatch(getUserDetails(user._id));
    }
  };
  return (
    <Box h="full" px="5" bg={Colors.white}>
      {error && <Message variant={Colors.red}>{error} </Message>}
      {loading && <Loading />}
      {!compatible && (
        <Message variant={Colors.red}>Passwords do not match </Message>
      )}
      {user && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={10} mt={5} pb={10}>
            <FormControl>
              <FormControl.Label
                _text={{ fontSize: "12px", fontWight: "bold" }}
              >
                USERNAME
              </FormControl.Label>

              <Input
                value={name}
                onChangeText={(e) => setName(e)}
                placeholder={user.name}
                borderWidth={1}
                borderColor={Colors.main}
                bg={Colors.deepGray}
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
                EMAIL ADDRESS
              </FormControl.Label>

              <Input
                value={email}
                onChangeText={(e) => setEmail(e)}
                placeholder={user.email}
                borderWidth={1}
                borderColor={Colors.main}
                bg={Colors.deepGray}
                py={3}
                color={Colors.main}
                fontSize={15}
                type="email"
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
                PASSWORD
              </FormControl.Label>

              <Input
                value={password}
                onChangeText={(e) => setPassword(e)}
                borderWidth={1}
                borderColor={Colors.main}
                bg={Colors.deepGray}
                py={3}
                color={Colors.main}
                fontSize={15}
                type="password"
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
                CONFIRM PASSWORD
              </FormControl.Label>

              <Input
                value={confirmPassword}
                onChangeText={(e) => setConfirmPassword(e)}
                borderWidth={1}
                borderColor={Colors.main}
                bg={Colors.deepGray}
                py={3}
                color={Colors.main}
                fontSize={15}
                type="password"
                _focus={{
                  bgColor: Colors.deepGray,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>

            <Buttons
              color={Colors.white}
              bg={Colors.main}
              onPress={submitHandler}
            >
              UPDATE PROFILE
            </Buttons>
          </VStack>
        </ScrollView>
      )}
    </Box>
  );
};

export default Profile;
