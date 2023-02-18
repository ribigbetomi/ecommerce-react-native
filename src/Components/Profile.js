import React from "react";
import { Text, Box, ScrollView, VStack, FormControl, Input } from "native-base";
import Colors from "../color";
import Buttons from "./Buttons";

const Profile = () => {
  const Inputs = [
    {
      input: "USER NAME",
      type: "text",
    },
    {
      input: "Email",
      type: "email",
    },
    {
      input: "NEW PASSWORD",
      type: "password",
    },
    {
      input: "CONFIRM PASSWORD",
      type: "password",
    },
  ];
  return (
    <Box h="full" px="5" bg={Colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
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
          <Buttons color={Colors.white} bg={Colors.main}>
            UPDATE PROFILE
          </Buttons>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
