import React from "react";
import { Text, Box, Center } from "native-base";
import Colors from "../color";

const Message = ({ bg = Colors.white, color, Children, size, bold }) => {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size} bold={bold}>
        {Children}
      </Text>
    </Center>
  );
};

export default Message;
