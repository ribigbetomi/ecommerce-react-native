import { Text, View } from "native-base";
import React from "react";
import Colors from "../../color";

const Message = ({ variant, children }) => {
  return (
    <View
      bgColor={variant}
      padding="4px"
      borderRadius="10px"
      alignItems="center"
      alignSelf="center"
      justifyContent="center"
      width="60%"
    >
      <Text color={Colors.white}> {children} </Text>
    </View>
  );
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
